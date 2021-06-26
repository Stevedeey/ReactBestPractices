import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target; //get the name and value attribute of the element that fires the onChange event
    this.setState({ [name]: value }); // name here is equiv to the initial state(topText, bottomText) which is also equivalent to the name attribute of the input element
                                        // value here is also equivalent to the value attribute of the input element
  }
//   handleChange = (event) => {
//       const {name, value} = event.target;
//       this.setState({[name]:value}); arrow function, we wont need to bind this methd in the class again. because of the arrow function
//   }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length); //use the no of images in the db to generate random no for an image to be retrived
    const randMemeImg = this.state.allMemeImgs[randNum].url; //get the url from the meme array
    this.setState({ randomImg: randMemeImg }); //randomMemeImg state is being updated
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
