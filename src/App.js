import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function App() {

  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Read', task: 'Read new book about war', progress: false},
    {id: 2, title: 'Listen', task: 'Listen new album ...', progress: false},
    {id: 3, title: 'Watch', task: 'Watch new movie with Hopkins', progress: false},
    {id: 4, title: 'Travel', task: 'Travel next month to Qatar', progress: false}
  ]);


const editAddButton = (id, task) => {
  const newArr = todoList.map(el => {
    if (el.id === id) {
      return {...el, task: task}
    }
    return el;
  })
  setTodoList(newArr)
}



  const addButton = (titleInput, taskInput) => {
    const newTodo = {
      id: Math.random(),
      title: titleInput,
      task: taskInput,
      progress: false
    }
    const newList = [...todoList, newTodo];
    setTodoList(newList)
  }


  const deleteButton = (id) => {
    const deleteTask = todoList.filter(el => el.id !== id);
    setTodoList(deleteTask)
  }


  return (
    <div className="App">
      <header className="App-header">
        <TodoInput addButton={addButton}/>
        {todoList.map(el => <TodoList editAddButton={editAddButton} deleteButton={deleteButton} el={el} key={el.id}/>)}
      </header>
    </div>
  );
}

export default App;
