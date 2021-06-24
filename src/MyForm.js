import React from "react";

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // const { name, value } = event.target;
    // this.setState({
    //   [name]: value,
    // });
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={this.handleChange}
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
        />
        <h2>{this.state.firstName}</h2>
        <h2>{this.state.lastName}</h2>
      </div>
    );
  }
}
export default MyForm;
