import Button from './Button';
import CSS from './Contact.module.css';

const Contact = () => {
  return (
    <section className={CSS.section} id="about">
      <div className="container">
        <div className={CSS.wrapper}>
          <div className={CSS.info}>
            <h2 className={CSS.title}>Get In Touch</h2>
            <p className={CSS.text}>
              Have questions or need support? Our team is here to help you get the most out of SkyIPTV.
            </p>
            <div className={CSS.contactItem}>
              <span>📧</span> support@skyiptv.com
            </div>
            <div className={CSS.contactItem}>
              <span>📍</span> Silicon Valley, CA
            </div>
          </div>
          
          <form id="contact-form" className={`${CSS.form} glass`}>
            <div className={CSS.row}>
              <input type="text" placeholder="Full Name" required className={CSS.input} />
              <input type="email" placeholder="Email Address" required className={CSS.input} />
            </div>
            <textarea placeholder="Your Message" rows="5" required className={CSS.textarea}></textarea>
            <Button variant="primary" size="lg" className={CSS.btn}>Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
