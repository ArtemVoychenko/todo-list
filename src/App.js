import React from 'react';
import './App.css';
import TodoListContainer from "./containers/todoList/TodoList.container";
import  ErrorBoundary from './containers/Error/ErrorBoundary';
import {store} from "./containers/store/store";
import {Provider} from "react-redux";



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ErrorBoundary>
      <TodoListContainer />
      </ErrorBoundary>
    </div>
    </Provider>
  );
}

export default App;

