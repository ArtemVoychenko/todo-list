import React from 'react';
import './App.css';
import TodoListContainer from "./containers/todoList/todoList.container";
import PropTypes from 'prop-types';
import TaskItem from "./containers/todoList/taskItem";

function App() {
  return (
    <div className="App">
      <TodoListContainer />
    </div>
  );
}

export default App;

App.protoTypes = {
  App: PropTypes.func.isRequired
}
