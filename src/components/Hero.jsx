import Button from './Button';
import CSS from './Hero.module.css';

const Hero = () => {
  return (
    <section className={CSS.hero}>
      <div className={CSS.bgOverlay}></div>
      <div className={`${CSS.container} container`}>
        <div className={CSS.content}>
          <h1 className={`${CSS.title} animate-slide-up`}>
            SkyIPTV – Smart <span className="gradient-text">Screen Sharing</span> Across All Devices
          </h1>
          <p className={`${CSS.subtitle} animate-slide-up stagger-1`}>
            Experience seamless, high-definition screen sharing with ultra-low latency. 
            Connect your phone, tablet, or laptop to any TV or monitor in seconds.
          </p>
          <div className={`${CSS.actions} animate-slide-up stagger-2`}>
            <Button variant="primary" size="lg">Download Now</Button>
            <Button variant="outline" size="lg">How It Works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
