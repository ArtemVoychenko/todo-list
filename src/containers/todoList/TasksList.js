import React, {useContext} from 'react';
import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';
import {CommentsAppContext} from '../Context/context'


const TaskList = ({ data }) => {
  const {deleteTask, doneTask} = useContext(CommentsAppContext);
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
}


export default TaskList;

