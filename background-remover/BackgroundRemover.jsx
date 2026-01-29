import React, { useState, useCallback, useRef } from 'react';

/**
 * BackgroundRemover Component
 * 
 * A complete background removal tool with:
 * - Drag and drop upload
 * - Before/after preview
 * - Multiple output format support
 * - Download functionality
 * 
 * Configure API_URL to point to your FastAPI backend
 */

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const BackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [outputFormat, setOutputFormat] = useState('png');
  const [isDragging, setIsDragging] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const fileInputRef = useRef(null);
  const comparisonRef = useRef(null);

  const supportedFormats = [
    { value: 'png', label: 'PNG', description: 'Transparent background' },
    { value: 'webp', label: 'WebP', description: 'Smaller file, transparent' },
    { value: 'jpeg', label: 'JPEG', description: 'White background' },
  ];

  const handleFile = useCallback(async (file) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG, JPEG, or WebP)');
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError('File too large. Maximum size is 10MB');
      return;
    }

    setError(null);
    setProcessedImage(null);
    setShowComparison(false);

    // Create preview of original
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage({
        url: e.target.result,
        name: file.name,
        file: file,
      });
    };
    reader.readAsDataURL(file);
  }, []);

  const processImage = async () => {
    if (!originalImage?.file) return;

    setIsProcessing(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', originalImage.file);

    try {
      const response = await fetch(
        `${API_URL}/remove-background?output_format=${outputFormat}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to process image');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      // Get filename from header or generate one
      const contentDisposition = response.headers.get('Content-Disposition');
      let filename = `${originalImage.name.split('.')[0]}_no_bg.${outputFormat}`;
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match) filename = match[1];
      }

      setProcessedImage({
        url: url,
        name: filename,
        blob: blob,
      });
      setShowComparison(true);
    } catch (err) {
      setError(err.message || 'Failed to process image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage.url;
    link.download = processedImage.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleSliderMove = (e) => {
    if (!comparisonRef.current) return;
    const rect = comparisonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const reset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setError(null);
    setShowComparison(false);
    setSliderPosition(50);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Background Remover</h1>
        <p style={styles.subtitle}>
          Upload an image to remove its background instantly
        </p>

        {/* Upload Area */}
        {!originalImage && (
          <div
            style={{
              ...styles.dropzone,
              ...(isDragging ? styles.dropzoneActive : {}),
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e.target.files[0])}
              style={styles.hiddenInput}
            />
            <div style={styles.uploadIcon}>📷</div>
            <p style={styles.dropzoneText}>
              Drag and drop an image here, or click to select
            </p>
            <p style={styles.dropzoneSubtext}>
              Supports PNG, JPEG, WebP (Max 10MB)
            </p>
          </div>
        )}

        {/* Image Preview & Comparison */}
        {originalImage && (
          <div style={styles.previewSection}>
            {showComparison && processedImage ? (
              <div
                ref={comparisonRef}
                style={styles.comparisonContainer}
                onMouseMove={handleSliderMove}
              >
                {/* Original Image (full) */}
                <img
                  src={originalImage.url}
                  alt="Original"
                  style={styles.comparisonImage}
                />
                {/* Processed Image (clipped) */}
                <div
                  style={{
                    ...styles.comparisonOverlay,
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src={processedImage.url}
                    alt="Processed"
                    style={styles.comparisonImage}
                  />
                </div>
                {/* Slider */}
                <div
                  style={{
                    ...styles.slider,
                    left: `${sliderPosition}%`,
                  }}
                >
                  <div style={styles.sliderHandle}>⟷</div>
                </div>
                {/* Labels */}
                <div style={styles.labelOriginal}>Original</div>
                <div style={styles.labelProcessed}>Processed</div>
              </div>
            ) : (
              <div style={styles.singlePreview}>
                <img
                  src={originalImage.url}
                  alt="Original"
                  style={styles.previewImage}
                />
              </div>
            )}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}

        {/* Controls */}
        {originalImage && (
          <div style={styles.controls}>
            {/* Format Selection */}
            <div style={styles.formatSection}>
              <label style={styles.label}>Output Format:</label>
              <div style={styles.formatButtons}>
                {supportedFormats.map((format) => (
                  <button
                    key={format.value}
                    onClick={() => setOutputFormat(format.value)}
                    style={{
                      ...styles.formatButton,
                      ...(outputFormat === format.value
                        ? styles.formatButtonActive
                        : {}),
                    }}
                    disabled={isProcessing}
                  >
                    <strong>{format.label}</strong>
                    <span style={styles.formatDesc}>{format.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={styles.actions}>
              {!processedImage ? (
                <button
                  onClick={processImage}
                  disabled={isProcessing}
                  style={{
                    ...styles.primaryButton,
                    ...(isProcessing ? styles.buttonDisabled : {}),
                  }}
                >
                  {isProcessing ? (
                    <>
                      <span style={styles.spinner}></span>
                      Processing...
                    </>
                  ) : (
                    'Remove Background'
                  )}
                </button>
              ) : (
                <button
                  onClick={downloadImage}
                  style={styles.primaryButton}
                >
                  Download {outputFormat.toUpperCase()}
                </button>
              )}

              <button
                onClick={reset}
                style={styles.secondaryButton}
                disabled={isProcessing}
              >
                {processedImage ? 'Start Over' : 'Cancel'}
              </button>
            </div>

            {/* Re-process with different format */}
            {processedImage && (
              <button
                onClick={processImage}
                style={styles.linkButton}
                disabled={isProcessing}
              >
                Re-process with different format
              </button>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <p style={styles.footer}>
        Powered by AI • No images stored on server
      </p>
    </div>
  );
};

// Styles
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    maxWidth: '700px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1a1a2e',
    margin: '0 0 8px 0',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 32px 0',
    textAlign: 'center',
  },
  dropzone: {
    border: '2px dashed #d1d5db',
    borderRadius: '12px',
    padding: '60px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    background: '#fafafa',
  },
  dropzoneActive: {
    borderColor: '#667eea',
    background: '#f0f4ff',
  },
  hiddenInput: {
    display: 'none',
  },
  uploadIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  dropzoneText: {
    fontSize: '18px',
    color: '#374151',
    margin: '0 0 8px 0',
  },
  dropzoneSubtext: {
    fontSize: '14px',
    color: '#9ca3af',
    margin: 0,
  },
  previewSection: {
    marginBottom: '24px',
  },
  singlePreview: {
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#f5f5f5',
  },
  previewImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  comparisonContainer: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'ew-resize',
    background: `
      linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%)
    `,
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
  },
  comparisonImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  comparisonOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  slider: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '4px',
    background: '#fff',
    transform: 'translateX(-50%)',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
  sliderHandle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40px',
    height: '40px',
    background: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    fontSize: '16px',
    color: '#667eea',
  },
  labelOriginal: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
  },
  labelProcessed: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'rgba(102, 126, 234, 0.9)',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
  },
  error: {
    background: '#fef2f2',
    border: '1px solid #fecaca',
    color: '#dc2626',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '24px',
    fontSize: '14px',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  formatSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
  },
  formatButtons: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  formatButton: {
    flex: '1',
    minWidth: '120px',
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    background: '#fff',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  formatButtonActive: {
    borderColor: '#667eea',
    background: '#f0f4ff',
  },
  formatDesc: {
    fontSize: '11px',
    color: '#9ca3af',
  },
  actions: {
    display: 'flex',
    gap: '12px',
  },
  primaryButton: {
    flex: '1',
    padding: '14px 24px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  secondaryButton: {
    padding: '14px 24px',
    background: '#fff',
    color: '#374151',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#667eea',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0,
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  footer: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '14px',
    marginTop: '24px',
  },
};

// Add keyframes for spinner animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

export default BackgroundRemover;
