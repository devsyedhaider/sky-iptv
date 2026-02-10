import CSS from './Testimonials.module.css';

const testimonials = [
  { name: 'John Doe', role: 'Software Engineer', text: 'SkyIPTV is the smoothest screen sharing app I have ever used. Minimal lag and zero setup hassle.', rating: 5 },
  { name: 'Sarah Smith', role: 'Designer', text: 'The interface is beautiful and works perfectly on my Mac and Samsung TV. Highly recommend!', rating: 5 },
  { name: 'Mike Ross', role: 'Remote Worker', text: 'Secure and fast. Essential for my daily meetings and presentations.', rating: 4 },
];

const Testimonials = () => {
  return (
    <section className={CSS.section}>
      <div className="container">
        <h2 className={CSS.title}>What Our <span className="gradient-text">Users Say</span></h2>
        <div className={CSS.grid}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`${CSS.card} glass animate-fade-in`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={CSS.rating}>{'⭐'.repeat(t.rating)}</div>
              <p className={CSS.text}>"{t.text}"</p>
              <div className={CSS.user}>
                <div className={CSS.avatar}>{t.name[0]}</div>
                <div>
                  <h4 className={CSS.userName}>{t.name}</h4>
                  <p className={CSS.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
