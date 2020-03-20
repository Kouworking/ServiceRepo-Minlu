/* eslint-disable linebreak-style */
import React from 'react';
import bulb from '../images/lightbulb.svg';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseDate: new Date(),
      startTime: '7:00 am',
      endTime: '12:00 pm',
      startIndex: 0,
      endIndex: 0,
      minHoursAlert: false,
      showSignUp: false,
      showLogIn: false,
    };
    this.handleChange2 = this.handleChange2.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.handleChangeInEnd = this.handleChangeInEnd.bind(this);
    this.hanldeClick = this.hanldeClick.bind(this);
    this.switchToLogin = this.switchToLogin.bind(this);
  }

  switchToLogin() {
    this.setState({
      showLogIn: !this.state.showLogIn,
    });
  }

  handleChangeInEnd(event) {
    console.log(event.target.value);
    const idx = this.props.times.indexOf(event.target.value);
    console.log(idx);
    this.setState({
      endTime: event.target.value,
      endIndex: idx,
    });
    if (idx - this.state.startIndex < 4 * 2) {
      this.setState({
        minHoursAlert: true,
      });
    } else {
      this.setState({
        minHoursAlert: false,
      });
    }
  }

  // handle change when user choose start time and pick date
  handleChange2(event) {
    const len = (JSON.stringify(event.target.value)).length;
    console.log('check the length: ', len);
    if (len === 12) {
      const chooseDate = new Date(JSON.stringify(event.target.value));
      console.log(chooseDate);
      if (chooseDate < new Date()) {
        alert('can not choose a past time');
      }
      console.log('handle change2: ', event.target.value);
      this.setState({
        chooseDate: event.target.value,
      });
    } else {
      // find the index of starttime, endtime must be choosed from index to end
      const idx = this.props.times.indexOf(event.target.value);
      console.log(idx);
      this.setState({
        startTime: event.target.value,
        startIndex: idx,
      });
    }
  }

  hanldeClick() {
    this.setState({
      showSignUp: !this.state.showSignUp,
    });
  }


  render() {
    return (
      <div id='booking-system'>
        <LogIn showLogIn = {this.state.showLogIn}
        switchToLogin = {this.switchToLogin}/>
        <SignUp show={this.state.showSignUp}
        showLogIn = {this.state.showLogIn}
        switchToLogin = {this.switchToLogin}
        />

        <h4 className='price-per-hour'> $75/hr </h4>
        <p className='remindar'>4 hr min</p>
        <div className='discount' >
          <p>8+hour discount  &nbsp;&nbsp; 15%off</p>
        </div>

        <div className='form'>
          <label htmlFor="date-time" >{'Date & Time'}</label>
          <div className="datePicker-container">
            <input type="date" className='datePicker' onChange={this.handleChange2} />
          </div>
          <div className='row'>
            <select className='start-time' onChange={this.handleChange2}>
              {this.props.times.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
            </select>
            <select className='end-time' value = {this.state.endTime} onChange={this.handleChangeInEnd}>
              {this.props.times.slice(this.state.startIndex + 1).map((time, index) => (
                <option key={index}>{time}</option>
              ))}
            </select>
          </div>


          <label htmlFor="attendee_count_input" >Attendees</label>
          <select className="attendess-select">
            <option>1 - 9 people</option>
            <option>10 -24 people</option>
            <option>25 - 39 people</option>
          </select>
        </div>

        {this.state.minHoursAlert ? (<div className="min-hours-table">
          <div className="v-top" stye={{ 'max- width': '10%' }}>
            <img src= {bulb} alt=""/>
          </div>
          <div className = "min-hours">
            <div className = "min-hours-title"> 4 hour minimum</div>
            <div className= "min-hours-content"> The host is more likely to accept if your request meets their minimum duration.</div>
          </div>
        </div>) : ('') }


      <div className='price'>
        <label >Price</label>
        <div className="col">
          <div className='price-detail-container'>
          <span className='price-detail'>
            $75.00x{(this.state.endIndex - this.state.startIndex) / 2} hours
            </span>
          <span className='price-total-detail'>  ${20 * (this.state.endIndex - this.state.startIndex)}</span>
          </div>
          <div className='processing-price'>
          <span className='processing'>Processing</span>
          <span className='price-processing'>$11.88</span>
          </div>
        </div>
        <div className='total-container'>
        <label >Total </label>
        <label className='total-price'>${20 * (this.state.endIndex - this.state.startIndex) + 11.88}</label>
        </div>
      </div>

      <button onClick={this.hanldeClick} className='request book'> Request to Book</button>

      <p className='notice'>Maria typically responds within 1 hr Cancel for free within 24 hours</p>

      </div >
    );
  }
}

export default Form;
