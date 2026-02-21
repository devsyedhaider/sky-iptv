import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Platforms from './components/Platforms';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  useScrollReveal();

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <TrustedBy />
          <Platforms />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </ThemeProvider>
  );
}


export default App;
