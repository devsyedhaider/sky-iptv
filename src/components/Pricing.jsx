import { usePlan } from '../context/PlanContext';
import Button from './Button';
import CSS from './Pricing.module.css';

const plans = [
  {
    name: '1-Year',
    price: '120$',
    id: '1-Year ($120)',
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
    id: '3-Years ($180)',
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
    id: '5-Years ($220)',
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
  const { setPlanAndScroll } = usePlan();

  return (
    <section className={CSS.pricing} id="pricing">
      <div className="container">
        <h2 className={`${CSS.title} reveal`}>Choose Your <span className="gradient-text">Plan</span></h2>
        <div className={CSS.grid}>
          {plans.map((p, i) => (
            <div key={p.name} className={`${CSS.plan} glass ${p.popular ? CSS.popular : ''} reveal`} style={{ transitionDelay: `${i * 0.15}s` }}>
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
                onClick={() => setPlanAndScroll(p.id)}
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
