import React, { useState } from 'react';

const Input = ({ onPress, btnLabel }) => {
  const [value, setValue] = useState('');

  const onAddTaskPress = () => {
    onPress(value);
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      onAddTaskPress();
      setValue('');
    }
  };

  const onChange = (e) => {
    setValue(e.target.value)
  };

  return (
    <div className="task-input">
      <input onKeyPress={handleKeyPress} onChange={onChange} value={value} />
      <button onClick={onAddTaskPress}>{btnLabel}</button>
    </div>
  );
};

export default Input;
