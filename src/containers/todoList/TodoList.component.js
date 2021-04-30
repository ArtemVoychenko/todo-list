import React, {useState} from 'react';
import TaskList from "./TasksList";
import Input from "../../components/input/Input";
import PropTypes from 'prop-types';
import {CommentsAppContext} from '../Context/context';
import {useSelector} from 'react-redux';
import {addDispatcher, deleteDispatcher, setDoneTaskDispatcher,} from "../store/dispachers/dispachers";




const TodoListComponent = () => {
  const storeContent = useSelector((store) => store);
  const [filterType, setFilterType] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const onAddPress = (title) => {
    addDispatcher(title);
  };

  const doneTask = (id) => {
    setDoneTaskDispatcher(id);
  };

  const deleteTask = (id) => {
    deleteDispatcher(id);
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
        return storeContent.inputReducer.filter(task => task.done);
      case 'done':
        return storeContent.inputReducer.filter(task => !task.done);
      case 'searched':
        return storeContent.inputReducer.filter((item) => item.title.toLowerCase()
          .includes(searchValue.toLowerCase()));
     default:
        return storeContent.inputReducer;
    }
  };

  const contextValue = {
    doneTask: doneTask,
    deleteTask: deleteTask
  };

  const visibleTasks = filterType === 'all' ? storeContent.inputReducer : getFilteredTasks(filterType);
  return (
    <CommentsAppContext.Provider value={contextValue}>
    <div className="todo">
      <h1 className="top1">Список задач:</h1>
      <div className="top">
        <div onClick={() => setFilterType('all')}>Все</div>
        <div onClick={() => setFilterType('active')}>Выполненные</div>
        <div onClick={() => setFilterType('done')}>Не выполненные</div>
      </div>
      <TaskList data={visibleTasks}  />
      <Input onPress={onAddPress} btnLabel="Добавить" />
      <Input onPress={onSearchPress} btnLabel="Поиск" />
      <h1 className="top2">Artem Voychenko 	&#169;</h1>
    </div>
    </CommentsAppContext.Provider>
  );
};



TodoListComponent.protoTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired
};

export default TodoListComponent;



