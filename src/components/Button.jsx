import CSS from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  return (
    <button 
      className={`${CSS.button} ${CSS[variant]} ${CSS[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
