import React, { Children } from "react";
import todosData from "./todosData";
import TodoItems from "../TodoTaskClass/TodoItems";

class App6 extends React.Component {
  constructor() {
    super();
    this.state = { todos: todosData };
    this.handleCheck = this.handleCheck.bind(this);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(
      this.setState({
        isLoading: false,
      }),
      1500
    );
  }

  handleCheck(id) {
    this.setState((prevState) => {
      const newTodo = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: newTodo,
      };
    });
  }
  render() {

    
    const todoIt = this.state.todos.map((item) => (
      <TodoItems key={item.id} item={item} handleCheck={this.handleCheck} />
    ));
    return <div>{todoIt}</div>;
  }
}
export default App6;
