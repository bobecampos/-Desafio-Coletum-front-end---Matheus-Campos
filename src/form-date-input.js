import React, { Component } from 'react'

class FormDateInput extends Component {
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
            <div className="input-group">
              <input className="form-control" id={this.props.componentId} type={this.props.type} order={this.props.order} components={this.props.components} value ={this.state.value} onChange={this.changeHandler}/>
              <div className="input-group-append">
                <button className="btn btn-gray"><span className="far fa-calendar-alt"></span></button>
              </div>
            </div>
            <small className="form-text">{this.props.helpBlock}</small>
          </div>
      </div>
    )
  }
}

export default FormDateInput

// label, componentId, type, helpBlock, order, components