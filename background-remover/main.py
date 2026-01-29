"""
Background Remover API
A FastAPI backend that uses rembg for background removal
"""

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from PIL import Image
from rembg import remove
import io

app = FastAPI(
    title="Background Remover API",
    description="Remove backgrounds from images using AI",
    version="1.0.0"
)

# CORS - adjust origins for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Supported output formats
SUPPORTED_FORMATS = {
    "png": "image/png",
    "webp": "image/webp",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
}

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB limit


@app.get("/")
async def root():
    """Health check endpoint"""
    return {"status": "ok", "message": "Background Remover API is running"}


@app.post("/remove-background")
async def remove_background(
    file: UploadFile = File(...),
    output_format: str = "png"
):
    """
    Remove background from an uploaded image.
    
    - **file**: Image file (PNG, JPEG, WebP supported)
    - **output_format**: Output format (png, webp, jpeg)
    
    Returns the processed image with transparent/white background.
    """
    
    # Validate output format
    output_format = output_format.lower()
    if output_format not in SUPPORTED_FORMATS:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported output format. Use: {', '.join(SUPPORTED_FORMATS.keys())}"
        )
    
    # Validate file type
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="File must be an image (PNG, JPEG, or WebP)"
        )
    
    # Read and validate file size
    contents = await file.read()
    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail=f"File too large. Maximum size is {MAX_FILE_SIZE // (1024*1024)}MB"
        )
    
    try:
        # Open the image
        input_image = Image.open(io.BytesIO(contents))
        
        # Remove background using rembg
        output_image = remove(input_image)
        
        # Handle format-specific processing
        output_buffer = io.BytesIO()
        
        if output_format in ["jpeg", "jpg"]:
            # JPEG doesn't support transparency - add white background
            if output_image.mode == "RGBA":
                background = Image.new("RGB", output_image.size, (255, 255, 255))
                background.paste(output_image, mask=output_image.split()[3])
                output_image = background
            output_image.save(output_buffer, format="JPEG", quality=95)
        elif output_format == "webp":
            output_image.save(output_buffer, format="WEBP", quality=95)
        else:  # PNG
            output_image.save(output_buffer, format="PNG")
        
        output_buffer.seek(0)
        
        # Generate filename
        original_name = file.filename or "image"
        base_name = original_name.rsplit(".", 1)[0]
        new_filename = f"{base_name}_no_bg.{output_format}"
        
        return Response(
            content=output_buffer.getvalue(),
            media_type=SUPPORTED_FORMATS[output_format],
            headers={
                "Content-Disposition": f'attachment; filename="{new_filename}"'
            }
        )
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing image: {str(e)}"
        )


@app.get("/formats")
async def get_formats():
    """Get list of supported output formats"""
    return {
        "formats": list(SUPPORTED_FORMATS.keys()),
        "default": "png",
        "note": "PNG and WebP support transparency. JPEG will have white background."
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
