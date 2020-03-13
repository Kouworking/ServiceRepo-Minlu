import React from 'react';
import DatePicker from "react-datepicker";
//import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      showCalendar: true
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (!this.state.showCalendar) {
      this.setState({
        showCalendar: true
      })
    }
  }

  render() {
    return (
      <div id='form'>
        <h4 className='price-per-hour'> $75/hr </h4>
        <p className='remindar'>4 hr min</p>
        <div className='row' className='discount-row' >
          <p>8+hour discount</p> <p>15%off</p>
        </div>

        <div>{'Date & Time'}</div>
        <div className='calendar'>
          {/* <DatePicker selected={this.state.startDate} onChange={date => setStartDate(date)} /> */}
            <select className={'date'}>
            <option>Mar 26, 2020</option>
            <option>Mar 27, 2020</option>
          </select>
          <div className='row'>
            <select classname='start time'>
              <option>7: 30 am</option>
              <option>8: 00 am</option>
              <option>8: 30 am</option>
            </select>
            <select classname='end time'>
              <option>9: 30 pm</option>
              <option>10: 00 pm</option>
              <option>10: 30 am</option>
            </select>
          </div>
        </div>

        <div>Attendees</div>
        <select classname='attendees'>
          <option>1 - 9 people</option>
          <option>10 -24 people</option>
          <option>25 - 39 people</option>
        </select>
        <div>Price</div>
        <div>Total</div>
        <button className='request book'> Request to Book</button>
        <p>Maria typically responds within 1 hr Cancel for free within 24 hours</p>

      </div>
    );
  }
}

export default Form;