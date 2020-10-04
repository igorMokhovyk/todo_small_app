import React, {useState} from "react";

function TodoInput(props) {

    const [titleInput, setTitleInput] = useState('');
    const [taskInput, setTaskInput] = useState('');


    const addNewTodo = () => {
        props.addButton(titleInput, taskInput);
        setTitleInput('');
        setTaskInput('');

    }

    return (
        <div>
            <input placeholder='Title' type='text' value={titleInput}
                   onChange={(event) => setTitleInput(event.target.value)}/>
            <input placeholder='Task' type='text' value={taskInput}
                   onChange={(event) => setTaskInput(event.target.value)}/>
            <button onClick={addNewTodo}>Add new ToDo</button>
        </div>
    )
};

export default TodoInput;


