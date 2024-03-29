import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
}

export default Button;