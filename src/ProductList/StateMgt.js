import React from "react";
import Multi from "./Multi";

class StateMgt extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    const handleCheck = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    };
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={handleCheck}>Increment</button>
       
      </div>
    );
  }
}
export default StateMgt;
