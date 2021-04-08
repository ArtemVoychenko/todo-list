import React, {useState} from 'react';

const SearchTask = () => {
  const [value, setValue] = useState('');

  const onSearchPress = () => {
    onAddPress(value);
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      onSearchPress();
      setValue('');
    }
  }

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="task-input">
      <input onKeyPress={handleKeyPress} onChange={onChange} value={value} />
      <button onClick={onSearchPress}>Искать</button>
    </div>
  );
};

export default SearchTask;
