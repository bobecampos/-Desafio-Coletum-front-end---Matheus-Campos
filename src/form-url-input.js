import React, { Component } from 'react'

class FormUrlInput extends Component {
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
        type="url"
        order={this.props.order}
        components={this.props.components}
        value ={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}

export default FormUrlInput