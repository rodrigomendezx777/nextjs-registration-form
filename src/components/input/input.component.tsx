import React, { useState } from 'react';
import { InputContainer, Label, InputField, ErrorMessage, SuccessMessage } from './input.style';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => string | null;
  successMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, value, onChange, validate, successMessage }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (onChange) {
      onChange(value);
    }

    if (validate) {
      const errorMessage = validate(value);
      setError(errorMessage);
      setIsValid(!errorMessage);
    }
  }

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField 
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        isError={!!error}
        isSuccess={isValid && !error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isValid && !error && successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </InputContainer>
  );
}

export default Input;
