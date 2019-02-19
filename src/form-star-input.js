import React, { Component } from 'react'
import ReactStars from 'react-stars'

const ratingChanged = (newRating) => {
    console.log(newRating)
}

class FormStarInput extends Component {
 
  render () {
    return (
      <ReactStars
        id={this.props.componentId}
        count={5}
        onChange={ratingChanged}
        size={32}
        color2={'#00ff15'}
      />
    )
  }
}

export default FormStarInput