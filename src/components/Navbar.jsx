import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import CSS from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);


  return (
    <nav className={`${CSS.navbar} ${isScrolled ? CSS.scrolled : ''}`}>
      <div className={`${CSS.container} container`}>
        <div className={CSS.logo}>
          <span className="gradient-text">SkyIPTV</span>
        </div>
        
        <div className={`${CSS.links} ${isMenuOpen ? CSS.menuActive : ''}`}>
          <a href="#about" className={CSS.link} onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#download" className={CSS.link} onClick={() => setIsMenuOpen(false)}>Downloads</a>
          <a href="#how-it-works" className={CSS.link} onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#pricing" className={CSS.link} onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#contact" className={CSS.link} onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          <div className={CSS.mobileBtn}>
            <a href="https://wa.me/923214899572" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">Get Started</Button>
            </a>
          </div>
        </div>

        <div className={CSS.actions}>
          <button onClick={toggleTheme} className={CSS.themeToggle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <a href="https://wa.me/923214899572" target="_blank" rel="noopener noreferrer" className={CSS.desktopBtn}>
            <Button variant="primary" size="sm">Get Started</Button>
          </a>
          <button className={CSS.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
