import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('A name was submitted:', this.input.value);
    console.log(this.name.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(input) => this.input = input} />
        <br/>
        <input type="text" ref={(input) => this.name = input} />
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Test;