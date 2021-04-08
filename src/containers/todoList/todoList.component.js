import React, {useState} from 'react';
import TaskList from "./tasksList";
import AddTask from "./addTask";

const TodoListComponent = ({ tasksList }) => {
  const [tasks, setTask] = useState(tasksList);
  const onAddPress = (newTaskTitle) => {
    const tempTasksList = [...tasks, {
      title: newTaskTitle,
      id: tasks.length,
      done: false,
    }];
    setTask(tempTasksList);
  };

  return (
    <div>
      <TaskList data={tasks} />
      <AddTask
        onAddPress={onAddPress}
      />
    </div>
  );
};

export default TodoListComponent;
