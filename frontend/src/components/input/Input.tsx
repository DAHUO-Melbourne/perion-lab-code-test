import React from 'react';

interface InputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  setValue,
  error,
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value.toString())}
    />
  );
}

export default Input;