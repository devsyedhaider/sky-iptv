import CSS from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={CSS.footer}>
      <div className="container">
        <div className={CSS.grid}>
          <div className={CSS.brand}>
            <h3 className={CSS.logo}><span className="gradient-text">desiIptv</span></h3>
            <p className={CSS.desc}>We provide the best IPTV services across the globe. Enjoy premium content anytime, anywhere!</p>
          </div>

          <div className={CSS.linksGroup}>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#download">Downloads</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        
        <div className={CSS.bottom}>
          <p>© 2024 desiIptv. All rights reserved.</p>
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
