import React, {useState} from "react";

function TodoInput4(props) {

    const [titleInput4, setTitleInput4] = useState('');
    const [taskInput4, setTaskInput4] = useState('');


    const addNewTodo = () => {
        props.addButton(titleInput4, taskInput4);
        setTitleInput4('');
        setTaskInput4('');

    }

    return (
        <div>
            <input placeholder='Title' type='text' value={titleInput4}
                   onChange={(event) => setTitleInput4(event.target.value)}/>
            <input placeholder='Task' type='text' value={taskInput4}
                   onChange={(event) => setTaskInput4(event.target.value)}/>
            <button onClick={addNewTodo}>Add new ToDo</button>
        </div>
    )
};

export default TodoInput4;

