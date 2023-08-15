import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const initialValue = JSON.parse(localStorage.getItem(key)) || defaultValue;
  const [value, setValue] = useState(initialValue);

  const handleSave = () => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const handleRemove = () => {
    localStorage.removeItem(key);
    setValue(defaultValue);
  };

  return [value, setValue, handleSave, handleRemove];
};
