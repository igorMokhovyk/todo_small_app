import React, {useState} from "react";

function TodoList(props) {


    const [editInput, setEditInput] = useState(false);
    const [editTaskInput, setEditTaskInput] = useState('');


    const editButtonAdd = () => {
        props.editAddButton(props.el.id, editTaskInput);
        setEditTaskInput('');
        setEditInput(!editInput)
    }


    return (
        <div>
            <li className='title1'>{props.el.title}</li>

            <div>{props.el.task}</div>

            <button onClick={() => props.deleteButton(props.el.id)}>DEL</button>


            {editInput &&

            <>
                <input placeholder='Task' value={editTaskInput}
                       onChange={(event) => setEditTaskInput(event.target.value)}/>
                {editInput && <button onClick={editButtonAdd}>Add</button>}
            </>
            }
            {!editInput && <button onClick={() => setEditInput(!editInput)}>EDIT</button>}
            <button>DONE</button>
            <p/>
        </div>
    )
};


export default TodoList;