import Button from './Button';
import CSS from './Pricing.module.css';

const plans = [
  {
    name: '1-Year',
    price: '120$',
    features: [
      'Live Channel 10k+',
      'Amazon Prime & Netflix Inclusive',
      '50K+ Movies & Web Series',
      'Up to 3 Devices',
      'All Indian, Tamil & Telugu Content',
    ],
    popular: false,
  },
  {
    name: '3-Years',
    price: '180$',
    features: [
      'Live Channel 10k+',
      'Amazon Prime & Netflix Inclusive',
      '50k+ Movies & Web Series',
      'Up to 4 Devices',
      'All Indian, Tamil & Telugu Content',
    ],
    popular: true,
  },
  {
    name: '5-Years',
    price: '220$',
    features: [
      'Live Channel 10k+',
      'Amazon Prime & Netflix Inclusive',
      '50K+ Movies & Web Series',
      'Up to 5 Devices',
      'All Indian, Tamil & Telugu Content',
    ],
    popular: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={CSS.pricing} id="pricing">
      <div className="container">
        <h2 className={CSS.title}>Choose Your <span className="gradient-text">Plan</span></h2>
        <div className={CSS.grid}>
          {plans.map((p) => (
            <div key={p.name} className={`${CSS.plan} glass ${p.popular ? CSS.popular : ''}`}>
              {p.popular && <span className={CSS.badge}>Most Popular</span>}
              <h3 className={CSS.planName}>{p.name}</h3>
              <div className={CSS.price}>
                <span className={CSS.amount}>{p.price}</span>
              </div>
              <ul className={CSS.featureList}>
                {p.features.map(f => <li key={f}>✔ {f}</li>)}
              </ul>
              <Button 
                variant={p.popular ? 'primary' : 'outline'} 
                className={CSS.btn}
                onClick={scrollToContact}
              >
                Choose {p.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
