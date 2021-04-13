import React, { useState } from 'react';
import PropTypes from 'prop-types';


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

Input.propTypes = {
  onPress: PropTypes.func.isRequired,
  btnLabel: PropTypes.string.isRequired
};

export default Input;




