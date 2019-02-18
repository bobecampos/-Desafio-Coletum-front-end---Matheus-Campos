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
      <div className="form-group row">
          <label className="col-sm-4 col-form-label text-label" htmlFor={this.props.componentId}>{this.props.label}</label>
          <div className="col-sm-8">
            <input className="form-control" id={this.props.componentId} type={this.props.type} order={this.props.order} components={this.props.components} value ={this.state.value} onChange={this.changeHandler}/>
            <small className="form-text">{this.props.helpBlock}</small>
          </div>
      </div>
    )
  }
}

export default FormTextInput

// label, componentId, type, helpBlock, order, components