import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  reviewList = () => {
    const associatedReviews = this.props.reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId;
    })
    return associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={this.props.deleteReview} />
    })
  }
  
  render() {
    return (
      <ul>
        {this.reviewList()}
      </ul>
    );
  }
};

export default Reviews;