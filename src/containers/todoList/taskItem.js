import React from 'react';

const TaskItem = ({ task }) => {
  console.log('task', task)
  const { title, id, done } = task;
  return (
    <div key={id.toString()}>
      {title}
    </div>
  );
};

export default TaskItem;
