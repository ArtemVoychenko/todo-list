import React from 'react';
import PropTypes from 'prop-types';



const TaskItem = ({ task, deleteTask, doneTask }) => {
  const { title, done } = task;
  const className = 'task' + (task.done ? ' task-done' : '');
  return (
    <div className={className}>
      <p>{title}</p>
      <div className="action-btn">
        {done ? (
          <p  onClick={deleteTask}>&#10060;</p>
        ) : (
          <p  onClick={doneTask}>&#9989;</p>
        )}
      </div>
    </div>
  );
};

TaskItem.protoTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  doneTask: PropTypes.func.isRequired
}

export default TaskItem;



