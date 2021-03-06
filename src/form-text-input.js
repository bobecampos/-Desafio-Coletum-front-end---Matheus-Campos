import React, { Component } from 'react'

class FormTextInput extends Component {
  constructor () {
      super ()
      this.state = {
        value: '', 
      }
  }

  changeHandler = event => {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <input
        className="form-control"
        id={this.props.componentId}
        type="text"
        order={this.props.order}
        value ={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}

export default FormTextInput