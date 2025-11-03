
import React, { useRef, useEffect, useCallback, useState } from 'react';

interface CameraModalProps {
  onClose: () => void;
  onCapture: (imageDataUrl: string) => void;
}

const CameraModal: React.FC<CameraModalProps> = ({ onClose, onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } else {
        setError("Your browser does not support camera access.");
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("Could not access camera. Please check your browser permissions.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, [startCamera, stopCamera]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        onCapture(dataUrl);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in" aria-modal="true" role="dialog">
      <div className="relative w-full max-w-lg bg-gray-900 rounded-lg shadow-xl p-4 mx-2">
        {error ? (
          <div className="text-center text-white p-8">
            <h3 className="text-lg font-semibold text-red-400">Camera Error</h3>
            <p className="mt-2 text-gray-300">{error}</p>
            <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
            >
                Close
            </button>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-auto rounded-md"
            ></video>
            <canvas ref={canvasRef} className="hidden"></canvas>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4">
              <button
                onClick={onClose}
                aria-label="Close camera"
                className="p-3 bg-white/20 text-white rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                onClick={handleCapture}
                aria-label="Capture photo"
                className="w-16 h-16 bg-white rounded-full border-4 border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transform hover:scale-110 transition-transform"
              ></button>
               {/* Spacer to balance the close button */}
              <div className="w-12 h-12"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CameraModal;
