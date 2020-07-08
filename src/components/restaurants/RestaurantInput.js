import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  constructor(props) {
    super();
    this.state = {
      text: ''
    }
  } 
  
  handleOnChange = ev => {
    this.setState({
      text: ev.target.value
    })
  }

  handleOnSubmit = ev => {
    ev.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={ev => this.handleOnSubmit(ev)}>
          <input
            type="text"
            value={this.state.text}
            onChange={ev => this.handleOnChange(ev)}
          />
          <input
            type="submit"
          />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
