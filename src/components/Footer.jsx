import CSS from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={CSS.footer}>
      <div className="container">
        <div className={CSS.grid}>
          <div className={CSS.brand}>
            <h3 className={CSS.logo}><span className="gradient-text">SkyIPTV</span></h3>
            <p className={CSS.desc}>The future of seamless screen sharing across all platforms.</p>
          </div>
          
          <div className={CSS.linksGroup}>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#download">Downloads</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className={CSS.linksGroup}>
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>

          <div className={CSS.linksGroup}>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        
        <div className={CSS.bottom}>
          <p>© 2026 SkyIPTV. All rights reserved.</p>
          <div className={CSS.socials}>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
