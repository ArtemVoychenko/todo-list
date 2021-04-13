import React from 'react';
import TaskItem from "./taskItem";
import PropTypes from 'prop-types';


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

TaskList.protoTypes = {
  data: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  doneTask: PropTypes.func.isRequired
}


export default TaskList;

