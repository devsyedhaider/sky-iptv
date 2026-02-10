import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import CSS from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${CSS.navbar} ${isScrolled ? CSS.scrolled : ''} glass`}>
      <div className={`${CSS.container} container`}>
        <div className={CSS.logo}>
          <span className="gradient-text">SkyIPTV</span>
        </div>
        
        <div className={CSS.links}>
          <a href="#features" className={CSS.link}>Features</a>
          <a href="#how-it-works" className={CSS.link}>How It Works</a>
          <a href="#pricing" className={CSS.link}>Pricing</a>
          <a href="#about" className={CSS.link}>About</a>
        </div>

        <div className={CSS.actions}>
          <button onClick={toggleTheme} className={CSS.themeToggle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Button variant="primary" size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
