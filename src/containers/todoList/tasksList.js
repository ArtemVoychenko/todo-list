import React from 'react';
import TaskItem from "./taskItem";

const TaskList = ({ data }) => {
  console.log('data', data)
  return (
    <div>
      {data.map(task => (
        <TaskItem task={task} />
      ))}
    </div>
  );
};

export default TaskList;
