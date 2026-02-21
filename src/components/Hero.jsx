import { usePlan } from '../context/PlanContext';
import Button from './Button';
import CSS from './Hero.module.css';

const Hero = () => {
  const { setPlanAndScroll } = usePlan();

  return (
    <section className={CSS.hero}>
      <div className={CSS.bgOverlay}></div>
      <div className={`${CSS.container} container`}>
        <div className={CSS.content}>
          <p className={`${CSS.badge} animate-slide-up`}>SKY IPTV</p>
          <h1 className={`${CSS.title} animate-slide-up stagger-1`}>
            ENTERTAINMENT <span className="gradient-text">ANYTIME, ANYWHERE</span>
          </h1>
          <p className={`${CSS.subtitle} animate-slide-up stagger-2`}>
            Enjoy high-quality entertainment with the best IPTV services in USA.
            We offer a wide variety of shows and channels for viewers in the USA, UK, Canada, UAE.
          </p>
          <div className={`${CSS.actions} animate-slide-up stagger-3 `}>
            <Button variant="primary" size="lg" onClick={() => setPlanAndScroll('Free Trial (1-Day)')}>
              Free Trial
            </Button>
            <Button variant="dark" size="lg" onClick={() => {
              const pricing = document.getElementById('pricing');
              if (pricing) pricing.scrollIntoView({ behavior: 'smooth' });
            }}>
              Let's Start
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
