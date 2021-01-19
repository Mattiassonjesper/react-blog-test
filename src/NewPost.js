import React, { Component } from "react";
 
class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Enter value : </label>
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={10}
          cols={100}
        />
      </div>
    );
  }
}
 
export default NewPost;