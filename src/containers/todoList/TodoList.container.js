import React, {useEffect, useState} from 'react';
import TodoListComponent from './TodoList.component';
import { TASKS } from './Сonstants';



const TodoListContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

// console.log('isLoading', isLoading);

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

