import React, {useState} from "react";

function TodoList2(props) {

    const [editInput2, setEditInput2] = useState(false);
    const [editTaskInput2, setEditTaskInput2] = useState('');

    const editButtonAdd = () => {
        props.editAddButton(props.el.id, editTaskInput2);
        setEditTaskInput2('');
        setEditInput2(!editInput2)
    }


    return (
        <div>
            <li className='title1'>{props.el.title}</li>

            <div>{props.el.task}</div>

            <button onClick={() => props.deleteButton(props.el.id)}>DEL</button>

            {editInput2 &&

            <>
                <input placeholder='Task' value={editTaskInput2}
                       onChange={(event) => setEditTaskInput2(event.target.value)}/>
                {editInput2 && <button onClick={editButtonAdd}>Add</button>}
            </>
            }
            {!editInput2 && <button onClick={() => setEditInput2(!editInput2)}>EDIT</button>}
            <button>DONE</button>
            <button onClick={() => props.mover2(props.el.id)}>Move to List 1</button>
            <p/>
        </div>
    )
};


export default TodoList2;


