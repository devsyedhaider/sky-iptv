import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import CSS from './WhatsAppWidget.module.css';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState('');

  // Show tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowTooltip(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const whatsappUrl = `https://wa.me/9232148972?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className={CSS.widgetWrapper}>
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className={CSS.tooltip}>
          Need help? Chat with us!
          <button className={CSS.closeTooltip} onClick={() => setShowTooltip(false)}>
            <FaTimes size={10} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button 
        className={`${CSS.fab} ${isOpen ? CSS.fabOpen : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp Chat"
      >
        {isOpen ? <FaTimes /> : <FaWhatsapp />}
      </button>


      {/* Chat Window */}
      {isOpen && (
        <div className={`${CSS.chatWindow} glass`}>
          <div className={CSS.chatHeader}>
            <div className={CSS.avatarWrapper}>
              <div className={CSS.avatar}>
                <FaWhatsapp />
                <span className={CSS.onlineDot}></span>
              </div>
              <div className={CSS.headerText}>
                <h4>SkyIPTV Support</h4>
                <p>Typically replies in minutes</p>
              </div>
            </div>
            <button className={CSS.closeBtn} onClick={handleClose}>
              <FaTimes />
            </button>
          </div>

          <div className={CSS.chatBody}>
            <div className={CSS.message}>
              <p>Hi there! 👋 How can we help you today with your IPTV subscription?</p>
              <span className={CSS.time}>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          <form className={CSS.chatFooter} onSubmit={handleSendMessage}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus
            />
            <button type="submit" className={CSS.sendBtn}>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
