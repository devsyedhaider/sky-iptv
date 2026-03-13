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
    referanceName: ''
  });


  
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
    

    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // 1. Submit to FormSubmit via AJAX
      const response = await fetch("https://formsubmit.co/ajax/ranaabdullah5678910.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          referanceName: formData.referanceName,
          _subject: `New Registration Request`
        })
      });

      if (response.ok) {
        // 2. Prepare WhatsApp message
        const whatsappMsg = `New Registration from ${formData.name}!%0A` +
          `Email: ${formData.email}%0A` +
          `Phone: ${formData.phone}%0A` +
          `Reference Name: ${formData.referanceName}`;
        
        // Using the number found in WhatsAppWidget.jsx
        const whatsappUrl = `https://wa.me/923014476718?text=${whatsappMsg}`;
        
        // 3. Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          referanceName: ''
        });
        
        alert('Thank you! Your request has been sent via email, and WhatsApp is opening for direct chat.');
      } else {
        alert('There was an issue sending your request. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert('Network error. Please try again later.');
    }
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
              <span>📧</span> <a href="mailto:devalihaider86@gmail.com">devalihaider86@gmail.com</a>
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
            className={`${CSS.form} glass reveal-right`}
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value={`New Registration Request`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

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




            <input 
              type="text" 
              name="referanceName" 
              placeholder="Reference Name" 
              required 
              className={CSS.input}
              value={formData.referanceName}
              onChange={handleChange}
            />

            <Button variant="primary" size="lg" className={CSS.btn} type="submit">Submit Request</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
