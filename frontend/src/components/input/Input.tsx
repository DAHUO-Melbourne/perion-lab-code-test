import React, { useState } from 'react';
import { steamIDTemplate } from '../../utils/regex';

interface InputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const Input: React.FC<InputProps> = ({
  value,
  setValue,
  onSubmit,
}: InputProps) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <div className='input_wrapper'>
      <input
        value={value}
        onChange={(e) => {
          setError(false);
          setValue(e.target.value.toString())
        }}
        className={error ? 'input_error' : 'input'}
      />
      <span
        className="material-symbols-outlined icon"
        onClick={() => {
          const error =!steamIDTemplate.test(value);
          setError(error);
          console.log(error);
          !error && onSubmit()
        }}
      >
        arrow_forward
      </span>
    </div>
  );
}

export default Input;