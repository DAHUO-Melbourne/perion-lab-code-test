import React from 'react';

interface CheckboxProps {
  onChange: (p: boolean) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  label
}: CheckboxProps) => {
  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        aria-label='filter-unplayed-games'
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.checked);
        }}
      />
      <span className='checkbox_label'>{label}</span>
    </label>
  );
}

export default Checkbox;