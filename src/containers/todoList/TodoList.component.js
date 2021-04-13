import React, {useState} from 'react';
import TaskList from "./TasksList";
import Input from "../../components/input/Input";
import PropTypes from 'prop-types';


const TodoListComponent = ({ tasksList }) => {
  const [tasks, setTask] = useState(tasksList);

  const [filterType, setFilterType] = useState('all');

  const [searchValue, setSearchValue] = useState('');

  const onAddPress = (newTaskTitle) => {
    const tempTasksList = [...tasks, {
      title: newTaskTitle,
      id: tasks.length,
      done: false,
    }];
    setTask(tempTasksList);
  };

  const onSearchPress = (value) => {
    if (value === '') {
      setFilterType('all');
      setSearchValue('');
    } else {
      setFilterType('searched');
      setSearchValue(value);
    }
  };

  const getFilteredTasks = (type) => {
    switch (type) {
      case 'active':
        return tasks.filter(task => task.done);
      case 'done':
        return tasks.filter(task => !task.done);
      case 'searched':
        return tasks.filter((item) => item.title.toLowerCase()
          .includes(searchValue.toLowerCase()));
     default:
        return tasks;
    }
  };


  // const doneTask = (id) => {
  //   const index = tasks.map(task => task.id).indexOf(id);
  //   if (index !== -1){
  //     const temp = [...tasks];
  //     temp[index].done = true;
  //     setTask(temp);
  //   }
  // };

  const doneTask = (id) => {
    const callback = (prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: true } : task
      );

    setTask(callback);
  };

  const deleteTask = (id) => {
    const index = tasks.map(task => task.id).indexOf(id);

    if (index !== -1){
      const temp = [...tasks];
      temp.splice(index,1);
      setTask(temp);
    }

  };

  const visibleTasks = filterType === 'all' ? tasks : getFilteredTasks(filterType);
  return (
    <div className="todo">
      <h1 className="top1">Список задач:</h1>
      <div className="top">
        <div onClick={() => setFilterType('all')}>Все</div>
        <div onClick={() => setFilterType('active')}>Выполненные</div>
        <div onClick={() => setFilterType('done')}>Не выполненные</div>
      </div>
      <TaskList data={visibleTasks} doneTask={doneTask} deleteTask={deleteTask} />
      <Input onPress={onAddPress} btnLabel="Добавить" />
      <Input onPress={onSearchPress} btnLabel="Поиск" />
      <h1 className="top2">Artem Voychenko 	&#169;</h1>
    </div>
  );
};

TodoListComponent.protoTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired
};

export default TodoListComponent;



