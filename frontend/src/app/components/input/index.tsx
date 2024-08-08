import { ChangeEvent } from 'react';
import './input.scss';

type InputProps = {
  type: string;
  label: string;
  placeholder: string;
  icon: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ type, label, placeholder, icon, value, onChange}: InputProps) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <div className="input-content">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="icon">
          <img src={icon} alt={`Icon for ${type}`} />
        </div>
      </div>
    </div>
  );
}
