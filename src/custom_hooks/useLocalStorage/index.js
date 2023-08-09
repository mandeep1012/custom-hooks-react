import * as React from 'react';

const useLocalStorage = (key, initialValue) => {
  // Get the initial value from localStorage or use the provided initialValue
  const storedValue = localStorage.getItem(key);
  const initial = storedValue !== null ? JSON.parse(storedValue) : initialValue;

  // Create a state variable to store the current value
  const [value, setValue] = React.useState(initial);

  // Update localStorage and the state when the value changes
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
};

export default useLocalStorage;