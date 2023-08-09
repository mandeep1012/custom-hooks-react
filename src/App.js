import * as React from 'react';

import './App.css';
import useResize from './custom_hooks/useWindowResize';
import useLocalStorage from './custom_hooks/useLocalStorage';
import useDebounce from './custom_hooks/useDebounce';
import useHover from './custom_hooks/useHover';

function App() {

  //useResize
  const windowSize = useResize();

  // useLocalStorage
  const [name, setName] = useLocalStorage('name', 'venus');
  const [gender, setGender] = useLocalStorage('gender', 'Female');

  // useDebounce
  const [inputValue, setInputValue] = React.useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  //useHover

  const [hoverRef, isHovered] = useHover();


  React.useEffect(() => {
    console.log('Debounced value:', debouncedInputValue);
  }, [debouncedInputValue]);

  const handleInputChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    else
      setInputValue(e.target.value);
  }


  return (
    <div className="App">
      <div>
        <p>Window Width: {windowSize.width}px</p>
        <p>Window Height: {windowSize.height}px</p>
      </div>
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleInputChange}
        // placeholder="Type to debounce..."
        /> <p>Name: {name}</p>
        <p>Gender: {gender}</p>
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to debounce..."
        />
        <p>Debounced Value: {debouncedInputValue}</p>
      </div>

      <div ref={hoverRef}>
        <p>{isHovered ? 'Hovering' : 'Not hovering'}</p>
      </div>
    </div>
  );
}

export default App;
