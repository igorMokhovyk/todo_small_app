import React, {useState} from "react";

function TodoList3(props) {


    const [editInput3, setEditInput3] = useState(false);
    const [editTaskInput3, setEditTaskInput3] = useState('');


    const editButtonAdd = () => {
        props.editAddButton(props.el.id, editTaskInput3);
        setEditTaskInput3('');
        setEditInput3(!editInput3)
    }


    return (
        <div className='border-dark'>
            <li className='title1 list1'>{props.el.title}</li>

            <div>{props.el.task}</div>

            <button onClick={() => props.deleteButton(props.el.id)}>DEL</button>


            {editInput3 &&

            <>
                <input placeholder='Task' value={editTaskInput3}
                       onChange={(event) => setEditTaskInput3(event.target.value)}/>
                {editInput3 && <button onClick={editButtonAdd}>Add</button>}
            </>
            }
            {!editInput3 && <button onClick={() => setEditInput3(!editInput3)}>EDIT</button>}
            <button>DONE</button>
            <button onClick={() => props.mover1(props.el.id)}>Move to List 2</button>
            <p/>
        </div>
    )
};


export default TodoList3;