import CSS from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={CSS.footer}>
      <div className="container">
        <div className={CSS.grid}>
          <div className={CSS.brand}>
            <h3 className={CSS.logo}><span className="gradient-text">SkyIPTV</span></h3>
            <p className={CSS.desc}>We provide the best IPTV services across the globe. Enjoy premium content anytime, anywhere!</p>
          </div>
          
          <div className={CSS.linksGroup}>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#download">Downloads</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className={CSS.linksGroup}>
            <h4>Contact Us</h4>
            <a href="mailto:skyiptv@gmail.com">skyiptv@gmail.com</a>
            <a href="tel:+13479196292">+1 (347) 919-6292</a>
          </div>

          <div className={CSS.linksGroup}>
            <h4>Location</h4>
            <div className={CSS.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=32-45+69th+St+New+York+USA&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className={CSS.bottom}>
          <p>© 2024 SkyIPTV. All rights reserved.</p>
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
