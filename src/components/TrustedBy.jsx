import CSS from './TrustedBy.module.css';
import amazonLogo from '../assets/Amazon.png';
import sonyLogo from '../assets/Sony_MAXx.png';
import discoveryLogo from '../assets/discovery.png';
import hboLogo from '../assets/hbo.png';
import jioLogo from '../assets/jio.png';
import colorsLogo from '../assets/colors.png';
import peacockLogo from '../assets/pecock.png';
import oscarLogo from '../assets/oscar.png';
import atarLogo from '../assets/atar.jpeg';
import skyLogo from '../assets/sky.jpeg';

const logos = [
  { name: 'Amazon', img: amazonLogo },
  { name: 'Sony', img: sonyLogo },
  { name: 'Discovery', img: discoveryLogo },
  { name: 'HBO', img: hboLogo },
  { name: 'Jio', img: jioLogo },
  { name: 'Colors', img: colorsLogo },
  { name: 'Peacock', img: peacockLogo },
  { name: 'Oscar', img: oscarLogo },
  { name: 'Atar', img: atarLogo },
  { name: 'Sky', img: skyLogo },
];

const TrustedBy = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={CSS.trusted}>
      <div className="container">
        <p className={CSS.label}>Compatible with leading streaming platforms</p>
      </div>
      <div className={CSS.scrollWrapper}>
        <div className={CSS.scrollContent}>
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className={CSS.logoItem}>
              <img src={logo.img} alt={logo.name} className={CSS.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
