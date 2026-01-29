# Background Remover Tool

A free, self-hosted background removal tool using AI. No API costs, no per-image fees.

## Features

- **AI-Powered**: Uses the U2-Net model via rembg for high-quality results
- **Multiple Formats**: Export as PNG (transparent), WebP (smaller + transparent), or JPEG (white background)
- **Before/After Comparison**: Interactive slider to compare original and processed images
- **Drag & Drop**: Easy file upload interface
- **Privacy-Focused**: Images are processed on your server, never sent to third parties
- **Completely Free**: No API costs or per-image fees

## Tech Stack

- **Backend**: Python + FastAPI + rembg
- **Frontend**: Vanilla HTML/CSS/JS (or React component)
- **AI Model**: U2-Net (downloads automatically on first use, ~176MB)

---

## Quick Start (Local Development)

### 1. Start the Backend

```bash
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py
```

The API will be available at `http://localhost:8000`

### 2. Open the Frontend

Simply open `frontend/index.html` in your browser, or serve it with any static file server:

```bash
cd frontend
python -m http.server 3000
```

Then visit `http://localhost:3000`

---

## Production Deployment

### Option A: VPS Deployment (Recommended)

#### Server Requirements
- 2GB RAM minimum (4GB recommended)
- 2 CPU cores
- 5GB disk space
- Ubuntu 20.04+ or similar

#### Step 1: Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python
sudo apt install python3 python3-pip python3-venv -y

# Install nginx (for serving frontend + reverse proxy)
sudo apt install nginx -y
```

#### Step 2: Deploy Backend

```bash
# Create app directory
sudo mkdir -p /var/www/bg-remover
cd /var/www/bg-remover

# Upload your backend files (or git clone)
# Then set up virtual environment
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Test it works
python main.py
# Press Ctrl+C to stop
```

#### Step 3: Create Systemd Service

```bash
sudo nano /etc/systemd/system/bg-remover.service
```

Paste this configuration:

```ini
[Unit]
Description=Background Remover API
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/bg-remover/backend
Environment="PATH=/var/www/bg-remover/venv/bin"
ExecStart=/var/www/bg-remover/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable bg-remover
sudo systemctl start bg-remover
sudo systemctl status bg-remover
```

#### Step 4: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/bg-remover
```

```nginx
server {
    listen 80;
    server_name yourdomain.com;  # Change this

    # Frontend
    location / {
        root /var/www/bg-remover/frontend;
        index index.html;
        try_files $uri $uri/ =404;
    }

    # API proxy
    location /api/ {
        rewrite ^/api/(.*) /$1 break;
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Increase timeouts for large images
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
        
        # Increase max upload size
        client_max_body_size 15M;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/bg-remover /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 5: Update Frontend API URL

Edit `/var/www/bg-remover/frontend/index.html` and change:

```javascript
const API_URL = '/api';
```

#### Step 6: Add SSL (Recommended)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```

---

### Option B: Docker Deployment

#### Dockerfile (Backend)

Create `backend/Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Pre-download the model
RUN python -c "from rembg import remove; from PIL import Image; import io; img = Image.new('RGB', (10,10)); remove(img)"

COPY main.py .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### docker-compose.yml

```yaml
version: '3.8'

services:
  api:
    build: ./backend
    ports:
      - "8000:8000"
    restart: unless-stopped
    
  frontend:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./frontend:/usr/share/nginx/html:ro
    restart: unless-stopped
```

Run with:

```bash
docker-compose up -d
```

---

## API Reference

### Health Check

```
GET /
```

Response:
```json
{
  "status": "ok",
  "message": "Background Remover API is running"
}
```

### Remove Background

```
POST /remove-background?output_format=png
```

**Parameters:**
- `file` (multipart/form-data): Image file
- `output_format` (query): `png`, `webp`, or `jpeg`

**Response:** Processed image as binary

**Example with cURL:**

```bash
curl -X POST "http://localhost:8000/remove-background?output_format=png" \
  -F "file=@photo.jpg" \
  --output result.png
```

### Get Supported Formats

```
GET /formats
```

Response:
```json
{
  "formats": ["png", "webp", "jpeg", "jpg"],
  "default": "png",
  "note": "PNG and WebP support transparency. JPEG will have white background."
}
```

---

## Customization

### Adjusting for Your Site

1. **Colors**: Edit the CSS variables in `index.html` - look for the gradient colors `#667eea` and `#764ba2`

2. **Branding**: Update the footer text and add your logo

3. **Limits**: Modify `MAX_FILE_SIZE` in `main.py` to change upload limits

### Integrating with React

If you're using React, import the `BackgroundRemover.jsx` component:

```jsx
import BackgroundRemover from './BackgroundRemover';

function App() {
  return (
    <div>
      <BackgroundRemover />
    </div>
  );
}
```

Update `API_URL` in the component to match your backend.

---

## Performance Notes

- **First request is slow**: The AI model (~176MB) downloads on first use
- **Processing time**: 2-10 seconds per image depending on size and server specs
- **GPU acceleration**: Not required, but speeds things up significantly if available
- **Memory**: Each image processing uses ~500MB-1GB RAM temporarily

---

## Troubleshooting

**"Connection refused" error**
- Make sure the backend is running (`python main.py`)
- Check the API_URL in the frontend matches your server

**Slow processing**
- Normal for first request (model download)
- Larger images take longer
- Consider adding a loading indicator

**Out of memory**
- Increase server RAM or add swap space
- Reduce MAX_FILE_SIZE to limit large uploads

---

## License

- **rembg**: MIT License
- **U2-Net model**: Apache 2.0 License
- **This code**: MIT License - use freely for commercial or personal projects

---

## Credits

Built with [rembg](https://github.com/danielgatis/rembg) and [U2-Net](https://github.com/xuebinqin/U-2-Net).
