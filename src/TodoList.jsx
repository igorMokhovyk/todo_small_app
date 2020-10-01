import React from "react";

function TodoList(props) {
    return (
        <div>
            <li>{props.el.title}</li>

            <div>{props.el.task}</div>

            <button>DEL</button>
            <button>EDT</button>
            <button>DONE</button>
            <p/>
        </div>
    )
};


export default TodoList;