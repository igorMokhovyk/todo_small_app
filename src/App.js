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
  ])


  return (
    <div className="App">
      <header className="App-header">
        <TodoInput/>
        {todoList.map(el => <TodoList el={el}/>)}
      </header>
    </div>
  );
}

export default App;
