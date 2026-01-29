# Background Remover - Deployment Guide

## Overview

The background remover requires a backend server to process images. This guide covers deployment options.

---

## Option 1: Deploy to Railway (Easiest - Recommended)

Railway provides free hosting for small projects.

### Step 1: Prepare Your Files

Make sure these files are in the `background-remover` folder:
- `main.py`
- `requirements.txt`
- `Procfile` (created below)
- `runtime.txt` (created below)

### Step 2: Create Required Files

Create `Procfile` in the `background-remover` folder:
```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

Create `runtime.txt`:
```
python-3.11.0
```

### Step 3: Deploy to Railway

1. Sign up at [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your GitHub account and select your repository
4. Railway will detect Python and deploy automatically
5. Once deployed, Railway will give you a URL like: `https://your-app.up.railway.app`

### Step 4: Update Your Frontend

Update the `API_URL` in your toolbox page to point to your Railway URL:
```javascript
const API_URL = 'https://your-app.up.railway.app';
```

---

## Option 2: Deploy to Render (Also Free)

1. Sign up at [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click "Create Web Service"
6. Once deployed, you'll get a URL like: `https://your-app.onrender.com`

---

## Option 3: Deploy to Your Own VPS (Most Control)

If you have a VPS (DigitalOcean, Linode, etc.):

### 1. Server Setup
```bash
# SSH into your server
ssh user@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Python and nginx
sudo apt install python3 python3-pip python3-venv nginx -y
```

### 2. Deploy Application
```bash
# Create directory
sudo mkdir -p /var/www/bg-remover
cd /var/www/bg-remover

# Upload your files (main.py, requirements.txt)
# Then install dependencies
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. Create Systemd Service

Create `/etc/systemd/system/bg-remover.service`:
```ini
[Unit]
Description=Background Remover API
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/bg-remover
Environment="PATH=/var/www/bg-remover/venv/bin"
ExecStart=/var/www/bg-remover/venv/bin/uvicorn main:app --host 127.0.0.1 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

Start the service:
```bash
sudo systemctl daemon-reload
sudo systemctl enable bg-remover
sudo systemctl start bg-remover
```

### 4. Configure Nginx

Create `/etc/nginx/sites-available/bg-remover`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # Important for large image uploads
        client_max_body_size 15M;
        proxy_read_timeout 300;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/bg-remover /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. Add SSL (Recommended)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```

---

## Updating the Toolbox Page

Once your backend is deployed, update `toolbox.html`:

Find the background remover section and add a link or embed option:

```html
<!-- Add a link to the background remover -->
<a href="https://your-backend-url.com/bg-remover"
   target="_blank"
   class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all">
    Open Background Remover Tool
    <svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
</a>
```

Or update the `index.html` API_URL:
```javascript
const API_URL = 'https://your-deployed-backend-url.com';
```

---

## Cost Estimates

- **Railway**: Free tier includes 500 hours/month (plenty for small projects)
- **Render**: Free tier available with some limitations
- **VPS**: $5-10/month (DigitalOcean, Linode)

---

## Troubleshooting

**Out of Memory**
- Increase server RAM or add swap space
- Limit concurrent requests in `main.py`

**Slow Performance**
- Consider upgrading to a plan with more RAM/CPU
- Add request queuing

**CORS Errors**
- Make sure CORS is enabled in `main.py` (already configured)
- Check that your frontend URL is allowed

---

## Need Help?

Check the full README.md for more details or open an issue on GitHub.
