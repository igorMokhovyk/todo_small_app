import React, {useState} from "react";

function TodoInput(props) {

    const [titleInput, setTitleInput] = useState('');
    const [taskInput, setTaskInput] = useState('');




    return (
        <div>
            <input type='text'/>
            <input type='text'/>
            <button>Add new ToDo</button>
        </div>
    )
};

export default TodoInput;