import { useState, useEffect } from 'react';
import { usePlan } from '../context/PlanContext';
import Button from './Button';
import CSS from './Contact.module.css';

const Contact = () => {
  const { selectedPlan, setSelectedPlan } = usePlan();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: selectedPlan,
    message: ''
  });

  // Sync internal form state when global context changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, plan: selectedPlan }));
  }, [selectedPlan]);
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Phone validation (10-15 digits, allowing spaces/dashes/plus)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      newErrors.phone = 'Phone number must be between 10-15 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // If user changes plan manualy, update global context too
    if (name === 'plan') {
      setSelectedPlan(value);
    }
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };


  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    }
    // If valid, allow form to submit naturally
  };

  return (
    <section className={CSS.section} id="contact">
      <div className="container">
        <div className={`${CSS.wrapper} reveal`}>
          <div className={CSS.info}>
            <h2 className={CSS.title}>Get In Touch</h2>
            <p className={CSS.text}>
              Have questions or need support? Our team is here to help you get the most out of SkyIPTV.
            </p>
            <div className={CSS.contactItem}>
              <span>📧</span> <a href="mailto:skyiptv@gmail.com">skyiptv@gmail.com</a>
            </div>
            <div className={CSS.contactItem}>
              <span>📞</span> <a href="tel:+13479196292">+1 (347) 919-6292</a>
            </div>
            <div className={CSS.contactItem}>
              <span>📍</span> 32-45 69th St, USA
            </div>
          </div>
          
          <form 
            id="contact-form"
            action="https://formsubmit.co/devalihaider86@gmail.com" 
            method="POST" 
            className={`${CSS.form} glass reveal-right`}
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value={`New Order Request - ${formData.plan}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            {/* Hidden input to include selected plan in standard form submission if needed, 
                though <select> name="plan" handles it naturally. 
                We might want to customize the subject line or add a hidden field for clarity. */}

            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              required 
              className={CSS.input}
              value={formData.name}
              onChange={handleChange}
            />

            <div className={CSS.row}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  required 
                  className={CSS.input}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className={CSS.error}>{errors.email}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  className={CSS.input}
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className={CSS.error}>{errors.phone}</span>}
              </div>
            </div>

            <select 
              name="plan" 
              className={CSS.select}
              value={formData.plan} 
              onChange={handleChange}
            >
              <option value="Free Trial (1-Day)">Free Trial - 1 Day</option>
              <option value="1-Year ($120)">1-Year Plan - $120</option>
              <option value="3-Years ($180)">3-Year Plan - $180</option>
              <option value="5-Years ($220)">5-Year Plan - $220</option>
            </select>


            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              required 
              className={CSS.textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <Button variant="primary" size="lg" className={CSS.btn} type="submit">Submit Request</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
