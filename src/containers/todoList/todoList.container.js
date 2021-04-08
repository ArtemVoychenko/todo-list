import React from 'react';
import TodoListComponent from './todoList.component';
import { TASKS } from './constants';

const TodoListContainer = () => {
  return (
    <div>
      <TodoListComponent tasksList={TASKS} />
    </div>
  );
};

export default TodoListContainer;
