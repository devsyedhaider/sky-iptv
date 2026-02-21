import Counter from './Counter';
import aboutImg from '../assets/about.png';
import CSS from './About.module.css';

const About = () => {
  return (
    <section className={CSS.section} id="about">
      <div className="container">
        <div className={`${CSS.wrapper} reveal`}>
          <div className={CSS.content}>
            <p className={CSS.subtitle}>Our Story</p>
            <h2 className={CSS.title}>Redefining <span className="gradient-text">Digital Entertainment</span></h2>
            <p className={CSS.text}>
              SkyIPTV was born out of a simple vision: to provide high-quality, buffer-free entertainment for everyone, 
              anywhere in the world. Since our inception, we've focused on leveraging cutting-edge server technology 
              to deliver a seamless viewing experience that rivals traditional cable.
            </p>
            
            <div className={CSS.stats}>
              <div className={CSS.statItem}>
                <h3><Counter end="10" suffix="k+" /></h3>
                <p>Live Channels</p>
              </div>
              <div className={CSS.statItem}>
                <h3><Counter end="50" suffix="k+" /></h3>
                <p>VOD Library</p>
              </div>
              <div className={CSS.statItem}>
                <h3><Counter end="24" suffix="/7" /></h3>
                <p>Support</p>
              </div>
            </div>
          </div>
          
          <div className={`${CSS.imageWrapper} reveal-right`}>
            <div className={CSS.imageBackdrop}></div>
            <img 
              src={aboutImg} 
              alt="Digital Entertainment" 
              className={CSS.image} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
