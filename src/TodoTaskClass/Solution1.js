import React from "react";

class Solution1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/2")
      .then((response) => response.json())
      .then((each) => {
        this.setState({ data: each, loading: false });
      });
  }

  render() {
    console.log("Render", this.state.loading);
    const text = this.state.loading ? "loading..." : this.state.data.name;
    console.log(this.state.data.name + " ss");
    return <h2>{text}</h2>;
  }
}
export default Solution1;
