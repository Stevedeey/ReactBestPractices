import React from "react";


class TodoItems extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
          <div className="todo-item">
            <input type="checkbox" 
        onChange={() => this.props.handleCheck(this.props.item.id)} />
            <p>{this.props.item.text}</p>
          </div>
        );
    }
}

export default TodoItems;
