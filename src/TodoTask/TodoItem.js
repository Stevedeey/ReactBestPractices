import React from "react";

function TodoItem(props) {
    console.log(props);
    return(
        <div>
            <input type="checkbox" checked={props.todo.completed}/>
            <p>{props.todo.text}</p>
        </div>
    )
}
export default TodoItem;
