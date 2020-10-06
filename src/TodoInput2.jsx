import React, {useState} from "react";

function TodoInput2 (props) {


    const [titleInput2, setTitleInput2] = useState('');
    const [taskInput2, setTaskInput2] = useState('');


    const addButton = () => {
        props.addButton(titleInput2, taskInput2);
        setTitleInput2('');
        setTaskInput2('');
    }


    return (



        <div>
            <input placeholder='Title' type='text' value={titleInput2} onChange={(event) => setTitleInput2(event.target.value)}/>
            <input placeholder='Task' type='text' value={taskInput2} onChange={(event) => setTaskInput2(event.target.value)}/>
            <button onClick={addButton}>Add new ToDo</button>
        </div>
    )
};


export default TodoInput2;