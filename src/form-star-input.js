import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'

class FormStarInput extends Component {
  constructor () {
      super ()
      this.state = {
        rating: 0 
      }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render () {
    const { rating } = this.state;

    return (
      <div className="form-group row">
          <label className="col-sm-4 col-form-label text-label" htmlFor={this.props.componentId}>{this.props.label}</label>
          <div className="col-sm-8">
            <StarRatingComponent
                name="rate1" 
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
            />
          </div>
      </div>
    )
  }
}

export default FormStarInput