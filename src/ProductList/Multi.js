import React from "react";

class Multi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 2 };
    this.handleCheck = this.handleCheck.bind(this);
  }
  render() {
      const handleCheck =  this.setState((prevState) => {
            return {
              count: prevState.count * this.props.vari,
            };
          })
    return (
      <div>
        <h3>
         {handleCheck}
        </h3>
      </div>
    );
  }
}
export default Multi;
