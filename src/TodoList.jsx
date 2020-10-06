import React, {useState} from "react";

function TodoList(props) {


    const [editInput, setEditInput] = useState(false);
    const [editTaskInput, setEditTaskInput] = useState('');
    const [numberOfList, setNumberOfList] = useState('');


    const editButtonAdd = () => {
        props.editAddButton(props.el.id, editTaskInput);
        setEditTaskInput('');
        setEditInput(!editInput)
    }

    const moveToList = () => {
        props.mover(numberOfList, props.el.id, props.list, props.setList);
        setNumberOfList('');
    }


    return (
        <div className='border-dark'>
            <li className='title1 list1'>{props.el.title}</li>

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
            <button onClick={moveToList}>Move to List</button>
            <input placeholder='#' type='text' value={numberOfList}
                   onChange={(event) => setNumberOfList(event.target.value)}/>
            <p/>
        </div>
    )
};


export default TodoList;