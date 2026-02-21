import { createContext, useContext, useState } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState('1-Year ($120)');

  const setPlanAndScroll = (plan) => {
    setSelectedPlan(plan);
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan, setPlanAndScroll }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);
