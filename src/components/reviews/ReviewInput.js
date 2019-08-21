import React, { Component } from 'react';

class ReviewInput extends Component {

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
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input 
            type="submit"
          />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
