import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

class FormDateInput extends Component {
  constructor () {
      super ()
      this.state = {
        value: '', 
      }
  }

  render () {
    return (
        <div className="input-group">
          <DatePicker
            className="form-control"
            id={this.props.componentId}
            order={this.props.order}
            placeholderText="DD/MM/AAAA"
            value ={this.state.value}
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text far fa-calendar-alt"></span>
          </div>
        </div>
    )
  }
}

export default FormDateInput

// <button className="btn btn-gray"><span className="far fa-calendar-alt"></span></button>