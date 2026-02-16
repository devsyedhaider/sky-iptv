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
          
          <form 
            id="contact-form"
            action="https://formsubmit.co/devalihaider86@gmail.com" 
            method="POST" 
            className={`${CSS.form} glass`}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - SkyIPTV" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className={CSS.row}>
              <input type="text" name="name" placeholder="Full Name" required className={CSS.input} />
              <input type="email" name="email" placeholder="Email Address" required className={CSS.input} />
            </div>
            <input type="tel" name="phone" placeholder="Phone Number" className={CSS.input} />
            <textarea name="message" placeholder="Your Message" rows="5" required className={CSS.textarea}></textarea>
            <Button variant="primary" size="lg" className={CSS.btn} type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
