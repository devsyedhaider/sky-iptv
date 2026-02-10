import Button from './Button';
import CSS from './Pricing.module.css';

const plans = [
  { name: 'Free', price: '$0', features: ['1 Device', 'Standard Quality', 'Basic Support'], popular: false },
  { name: 'Basic', price: '$9', features: ['3 Devices', 'HD Quality', 'Email Support'], popular: false },
  { name: 'Pro', price: '$19', features: ['5 Devices', '4K Quality', 'Priority Support'], popular: true },
  { name: 'Business', price: '$49', features: ['Unlimited', '8K Quality', '24/7 Support'], popular: false },
];

const Pricing = () => {
  return (
    <section className={CSS.pricing} id="pricing">
      <div className="container">
        <h2 className={CSS.title}>Simple <span className="gradient-text">Pricing</span></h2>
        <div className={CSS.grid}>
          {plans.map((p) => (
            <div key={p.name} className={`${CSS.plan} glass ${p.popular ? CSS.popular : ''}`}>
              {p.popular && <span className={CSS.badge}>Most Popular</span>}
              <h3 className={CSS.planName}>{p.name}</h3>
              <div className={CSS.price}>
                <span className={CSS.amount}>{p.price}</span>
                <span className={CSS.period}>/month</span>
              </div>
              <ul className={CSS.featureList}>
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Button variant={p.popular ? 'primary' : 'outline'} className={CSS.btn}>
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
