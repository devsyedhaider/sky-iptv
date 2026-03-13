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
      const response = await fetch("https://formsubmit.co/ajax/@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Phone": formData.phone,
          "Reference Name": formData.referanceName,
          "_subject": "New Registration Request",
          "_captcha": "false",
          "_template": "table"
        })
      });

      if (response.ok) {
        // 2. Prepare WhatsApp message
        const messageText = `New Registration from ${formData.name}!\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Reference Name: ${formData.referanceName}`;
        
        const whatsappUrl = `https://wa.me/13322332447?text=${encodeURIComponent(messageText)}`;
        
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
              Have questions or need support? Our team is here to help you get the most out of desiIptv.
            </p>
            <div className={CSS.contactItem}>
              <span>📧</span> <a href="mailto:skyiptvdistributors@gmail.com">skyiptvdistributors@gmail.com</a>
            </div>
            <div className={CSS.contactItem}>
              <span>📞</span> <a href="tel:+13322332447">+1 (332) 233-2447</a>
            </div>
            <div className={CSS.contactItem}>
              <span>📍</span> New York, USA
            </div>
          </div>
          
          <form 
            id="contact-form"
            className={`${CSS.form} glass reveal-right`}
            onSubmit={handleSubmit}
          >


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
