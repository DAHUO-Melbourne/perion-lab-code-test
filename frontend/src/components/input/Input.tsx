import React, { useState } from 'react';
import { steamIDTemplate } from '../../utils/regex';

export interface InputProps {
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
  const handleSubmit = () => {
    const error =!steamIDTemplate.test(value);
    setError(error);
    !error && onSubmit()
  }
  return (
    <>
      <div className='input_wrapper'>
        <input
          value={value}
          onChange={(e) => {
            setError(false);
            setValue(e.target.value.toString())
          }}
          onKeyUp={(e) => {
            if (e.key !== 'Enter') {
              return;
            }
            handleSubmit();
          }}
          className={error ? 'input_error' : 'input'}
        />
        <span
          className="material-symbols-outlined icon"
          onClick={() => handleSubmit()}
          data-testid='arrow_forward'
        >
          arrow_forward
        </span>
      </div>
      {error && (
        <h4 className='error'>Your input format has some problems, plz make sure all your digits are number</h4>
      )}
    </>
  );
}

export default Input;