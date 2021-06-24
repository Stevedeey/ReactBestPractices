import React from "react";
import todosData from "../TodoTask/todosData";


class TodoItems extends React.Component{
    constructor(props){
        super(props);
    }
    
     completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
     }
    
    render(){
      
        return (
          <div className="todo-item">
            <input
              type="checkbox"
              checked={this.props.item.completed}
              onChange={() => this.props.handleCheck(this.props.item.id)}
            />
            <p style={this.props.item.completed ? this.completedStyle : null}>
              {this.props.item.text}
            </p>
          </div>
        );
    }
}

export default TodoItems;
