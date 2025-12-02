import {useState, useEffect} from 'react';
import {Link} from 'react-router';

/**
 * Clean single-line footer with logo, nav, theme switcher, and status
 */
export function FooterNew() {
  const [theme, setTheme] = useState('dark');
  const [systemStatus, setSystemStatus] = useState('operational');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);
    setTheme(savedTheme);

    // Listen for system theme changes when in system mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  const applyTheme = (themeValue) => {
    let actualTheme = themeValue;
    
    // If system, detect the actual theme
    if (themeValue === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      actualTheme = isDark ? 'dark' : 'light';
    }

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', actualTheme);
    document.body.style.backgroundColor = actualTheme === 'dark' ? '#0a0a0a' : '#ffffff';
    document.body.style.color = actualTheme === 'dark' ? '#ffffff' : '#0a0a0a';
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const footerLinks = [
    {title: 'Home', url: '/'},
    {title: 'Catalog', url: '/collections/all'},
    {title: 'Contact', url: '/contact'},
  ];

  return (
    <footer className="footer-new">
      <div className="footer-container">
        {/* Left: Logo + Nav Links */}
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            Wicked Works
          </Link>
          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <Link key={link.url} to={link.url} className="footer-link">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Status + Theme Switcher */}
        <div className="footer-right">
          <div className="footer-status">
            <span className="status-dot"></span>
            <span className="status-text">All systems normal</span>
          </div>
          
          <div className="footer-theme-switcher">
            <button
              onClick={() => changeTheme('light')}
              className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
              aria-label="Light mode"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </button>
            
            <button
              onClick={() => changeTheme('dark')}
              className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
              aria-label="Dark mode"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
            
            <button
              onClick={() => changeTheme('system')}
              className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
              aria-label="System theme"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
