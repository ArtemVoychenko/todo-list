import React, {useEffect, useState} from 'react';
import TodoListComponent from './todoList.component';
import { TASKS } from './constants';

const TodoListContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

console.log('isLoading', isLoading);

  return (
    <div>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <TodoListComponent tasksList={TASKS} />
      )}
    </div>
  );
};

export default TodoListContainer;
