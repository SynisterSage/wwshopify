import {useState, useEffect} from 'react';
import {Link} from 'react-router';

/**
 * Hero section with mouse-following gradient effect
 */
export function Hero() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [tiltStyle, setTiltStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Convert mouse position to percentage
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({x, y});
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleHeadingMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleHeadingMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950"
      style={{
        background: `
          radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255, 45, 63, 0.15) 0%, 
            rgba(255, 45, 63, 0.05) 25%,
            transparent 50%
          ),
          #0a0a0a
        `,
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/20 via-transparent to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto py-20">
        <h1 
          className="hero-heading font-bold mb-12 gradient-text-red"
          style={tiltStyle}
          onMouseMove={handleHeadingMouseMove}
          onMouseLeave={handleHeadingMouseLeave}
        >
          Designed with Intention
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '3rem',
          maxWidth: '50rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.75',
          textAlign: 'center'
        }}>
          Experience bold expressions and distinctive aesthetics crafted for those who dare to stand out.
        </p>
        <Link to="/collections/all">
          <button className="hero-cta">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
