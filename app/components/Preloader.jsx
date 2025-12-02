import {useEffect, useState} from 'react';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if preloader has been shown in this session
    const hasShownIntro = sessionStorage.getItem('wickedworks_shown_intro');

    if (!hasShownIntro) {
      // First visit - show preloader
      setIsVisible(true);

      // Set flag so preloader doesn't show again in this session
      sessionStorage.setItem('wickedworks_shown_intro', 'true');

      // Hide preloader after 3-4 seconds (3.5s)
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-brand">
          <h1>Wicked Works</h1>
        </div>
        <div className="preloader-spinner">
          <div className="spinner"></div>
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          z-index: 9999;
          animation: fadeOut 0.5s ease-out 3s forwards;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            visibility: visible;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .preloader-brand h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
          letter-spacing: -0.5px;
          text-align: center;
        }

        .preloader-spinner {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
