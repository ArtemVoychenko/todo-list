import React from 'react';

const TaskItem = ({ task, deleteTask, doneTask }) => {
  const { title, done } = task;
  const className = 'task' + (task.done ? ' task-done' : '');
  return (
    <div className={className}>
      <p>{title}</p>
      <div className="action-btn">
        {done ? (
          <p onClick={deleteTask}>&#10060;</p>
        ) : (
          <p onClick={doneTask}>&#9989;</p>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
