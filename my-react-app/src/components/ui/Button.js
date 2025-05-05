import React from 'react';
import '../../styles/components/ui/Button.css';

function Button({ children, onClick }) {
  return (
    <button 
      className={`button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;