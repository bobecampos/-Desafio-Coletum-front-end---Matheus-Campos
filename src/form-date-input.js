import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class FormDateInput extends Component {
  constructor () {
      super ()
      this.state = {
        startDate: new Date()
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render () {
    return (
        <div className="input-group">
          <DatePicker
            className="form-control"
            id={this.props.componentId}
            order={this.props.order}
            value ={this.state.value}
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholderText="DD/MM/AAAA"
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