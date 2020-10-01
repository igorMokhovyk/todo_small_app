import React from "react";

function TodoList(props) {
    return (
        <div>
            <li className='title1'>{props.el.title}</li>

            <div>{props.el.task}</div>

            <button onClick={() => props.deleteButton(props.el.id)}>DEL</button>
            <button>EDIT</button>
            <button>DONE</button>
            <p/>
        </div>
    )
};


export default TodoList;