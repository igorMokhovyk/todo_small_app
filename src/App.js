import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import axios from 'axios';

function App() {

    // const [todoList, setTodoList] = useState([
    //     {id: 1, title: 'Read', task: 'Read new book about war', progress: false},
    //     {id: 2, title: 'Listen', task: 'Listen new album ...', progress: false},
    //     {id: 3, title: 'Watch', task: 'Watch new movie with Hopkins', progress: false},
    //     {id: 4, title: 'Travel', task: 'Travel next month to Qatar', progress: false}
    // ]);



    const [todoList, setTodoList] = useState([]);

    //https://my-json-server.typicode.com/imonoho/todolistdata/db/
    const getList = () => {
            axios.get('https://nazarov-kanban-server.herokuapp.com/card')
                .then(res => {
                    console.log(res)
                    setTodoList(res.data)
                })
                .catch(error => {
return alert('Error')
                })
        }


   // const [trash, setTrash] = useState([]);



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
        // const deleteForTrash = todoList.filter(el => el.id === id)
        // setTrash(deleteForTrash)
        setTodoList(deleteTask)
    }


    return (
        <div className="App">
            <header className="App-header">
                <TodoInput addButton={addButton}/>
                {todoList.map(el => <TodoList editAddButton={editAddButton}
                                              deleteButton={deleteButton}
                                              el={el} key={el._id}/>)}
                <hr/>
                <p/>
                <button onClick={getList}>Get Data</button>
            </header>
        </div>
    );
}

export default App;
