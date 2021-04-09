import React from 'react';
import TaskItem from "./taskItem";

const TaskList = ({ data, deleteTask, doneTask }) => {
  return (
    <div>
      {data.map(task => (
        <TaskItem
          task={task}
          deleteTask={() => {
            console.log('delete');
            deleteTask(task.id);
          }}
          doneTask={() => {
            console.log('delete');
            doneTask(task.id)
          }}
        />
      ))}
    </div>
  );
};

export default TaskList;
