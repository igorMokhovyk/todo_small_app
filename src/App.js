import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import axios from 'axios';
import TodoList2 from "./TodoList2";
import TodoInput2 from "./TodoInput2";
import TodoList3 from "./TodoList3";


function App() {

const list3 = [ {id: 9, title: 'Create', task: 'Create new...', progress: false},
    {id: 10, title: 'Walk', task: 'Evening walking', progress: false},
    {id: 11, title: 'Play', task: 'Play new game', progress: false},
    {id: 12, title: 'Fight', task: 'Fight with a new master', progress: false}]

    const [todoList, setTodoList] = useState([
        {id: 1, title: 'Read', task: 'Read new book about war', progress: false},
        {id: 2, title: 'Listen', task: 'Listen new album ...', progress: false},
        {id: 3, title: 'Watch', task: 'Watch new movie with Hopkins', progress: false},
        {id: 4, title: 'Travel', task: 'Travel next month to Qatar', progress: false}
    ]);

    const [todoList2, setTodoList2] = useState([
        {id: 5, title: 'Speak', task: 'Try to speak with...', progress: false},
        {id: 6, title: 'Run', task: 'Run for 30 miles', progress: false},
        {id: 7, title: 'Sleep', task: 'Sleep around 7 hours', progress: false},
        {id: 8, title: 'Cook', task: 'Prepare new salad', progress: false}
    ]);

    const [todoList3, setTodoList3] = useState(list3);

    const [todoList4, setTodoList4] = useState([
        {id: 13, title: 'Grocery', task: 'Buy some bread...', progress: false},
        {id: 14, title: 'Call', task: 'Call mom', progress: false},
        {id: 15, title: 'Meeting', task: 'Meet old friends', progress: false},
        {id: 16, title: 'Love', task: 'Fall in love', progress: false}
    ]);


    const listOfList = [['todoList', 'setTodoList'], ['todoList2', 'setTodoList2'],
        ['todoList3', 'setTodoList3'], ['todoList4', 'setTodoList4']];

    const listOfList2 = [[todoList, setTodoList], [todoList2, setTodoList2],
        [todoList3, setTodoList3], [todoList4, setTodoList4]];

    //const [todoList, setTodoList] = useState([]);

    //in case if i will use API


    // const getList = () => {
    //     axios.get('https://nazarov-kanban-server.herokuapp.com/card')
    //         .then(res => {
    //             console.log(res)
    //             setTodoList(res.data)
    //         })
    //         .catch(error => {
    //             return alert('Error')
    //         })
    // }
    //
    //
    // const deleteTodoCard = async  (id) => {
    //     await axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
    //         .then(res => setTodoList(todoList))
    //         .catch(res => console.log(res))
    //
    //     getList()
    // }


    // const [trash, setTrash] = useState([]);

    // const addButton = (titleInput, taskInput) => {
    //     axios.post('https://nazarov-kanban-server.herokuapp.com/card',  {
    //         id: Math.random(),
    //         title: titleInput,
    //         task: taskInput,
    //         progress: false
    //     })
    //
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    //
    // }


    const addButton = (titleInput, taskInput) => {
        const newAdd = {
            id: Math.random(),
            title: titleInput,
            task: taskInput,
            progress: false
        }
        setTodoList([...todoList, newAdd])
    }


    const addButton2 = (titleInput, taskInput) => {
        const newAdd = {
            id: Math.random(),
            title: titleInput,
            task: taskInput,
            progress: false
        }
        setTodoList2([...todoList2, newAdd])
    }

    const addButton3 = (titleInput, taskInput) => {
        const newAdd = {
            id: Math.random(),
            title: titleInput,
            task: taskInput,
            progress: false
        }
        setTodoList3([...todoList3, newAdd])
    }


    const addButton4 = (titleInput, taskInput) => {
        const newAdd = {
            id: Math.random(),
            title: titleInput,
            task: taskInput,
            progress: false
        }
        setTodoList4([...todoList4, newAdd])
    }


    const editAddButton = (id, task) => {
        const newArr = todoList.map(el => {
            if (el.id === id) {
                return {...el, task: task}
            }
            return el;
        })
        setTodoList(newArr)
    }


    const editAddButton2 = (id, task) => {
        const newArr = todoList2.map(el => {
            if (el.id === id) {
                return {...el, task: task}
            }
            return el;
        })
        setTodoList2(newArr)
    }


    const deleteButton = (id) => {
        const deleteTask = todoList.filter(el => el.id !== id);
        // const deleteForTrash = todoList.filter(el => el.id === id)
        // setTrash(deleteForTrash)
        setTodoList(deleteTask)
    }

    const deleteButton2 = (id) => {
        const deleteTask = todoList2.filter(el => el.id !== id);
        // const deleteForTrash = todoList.filter(el => el.id === id)
        // setTrash(deleteForTrash)
        setTodoList2(deleteTask)
    }


    // const moveToOtherList = (id) => {
    //     const item = todoList.find(el => el.id === id)
    //     setTodoList2([...todoList2, item]);
    //
    //     setTodoList(
    //         todoList.filter(el => el.id !== id)
    //     )
    // }
    //
    // const moveToOtherList2 = (id) => {
    //     const item = todoList2.find(el => el.id === id)
    //     setTodoList([...todoList, item]);
    //
    //     setTodoList2(
    //         todoList2.filter(el => el.id !== id)
    //     )
    // }


    const mover = (number, id, list, setList) => {
        const listFrom = list;
        const listFromSet = setList;

        console.log(number, id, list, setList)

        const item = listFrom.find(el => el.id === id)
        for(let el of listOfList) {
            for (let i = 0; i < el.length; i++) {
                if (el[i][el[0].length-1] === number) {
                    `list${number}`.push(item)
                    console.log(listOfList2, "element")
                }
            }
        }

        //setTodoList3([...todoList3, item]);
        listFromSet(
            listFrom.filter(el => el.id !== id)
        )
    }


    return (
        <div className="App ">

            List # 1
            <hr/>
            <TodoInput addButton={addButton}/>
            {todoList.map(el => <TodoList
                setList={setTodoList}
                list={todoList}
                mover={mover}
                editAddButton={editAddButton}
                deleteButton={deleteButton}
                el={el} key={el.id}/>)}
            <br/>


            List # 2
            <hr/>
            <TodoInput2 addButton={addButton2}/>
            {todoList2.map(el => <TodoList2
                list={todoList2}
                mover={mover}
                editAddButton={editAddButton2}
                deleteButton={deleteButton2}
                el={el} key={el.id}/>)}
            <br/>

            List # 3
            <hr/>

            {todoList3.map(el => <TodoList3
                list={todoList3}
                mover={mover}
                editAddButton={editAddButton2}
                deleteButton={deleteButton2}
                el={el} key={el.id}/>)}
            <br/>

        </div>
    );
}

export default App;
