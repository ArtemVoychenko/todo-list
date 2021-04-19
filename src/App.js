import React from 'react';
import './App.css';
import TodoListContainer from "./containers/todoList/TodoList.container";
import  ErrorBoundary from './containers/Error/ErrorBoundary';



function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <TodoListContainer />
      </ErrorBoundary>
    </div>
  );
}

export default App;

