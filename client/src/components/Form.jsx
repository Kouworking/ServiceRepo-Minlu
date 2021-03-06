/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import bulb from '../images/lightbulb.svg';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

const Remindar = styled.p`
  font-size: 75%;
  margin-bottom: 20px;
`;

const PricePerHour = styled.h4`
  margin: 50px 0 0 0;
  text-align: center;
  font-size: 200%;
`;

const Discount = styled.div`
  border-top: 1px solid #b7b7ca;
  border-bottom: 1px solid #b7b7ca;
  padding: 4px;
  margin-bottom: 15px;
`;

const BookingSys = styled.div`
  width: 34.5%;
  color:#343840;
  font-family: Avenir-Heavy,"Helvetica Neue",Helvetica,Arial,sans-serif;
  border:1px solid #b7b7ca;
  border-radius: 3px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
  margin-bottom:25px;
  background-color: #D3D3D3;
`;

const FormContainer = styled.form`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3%;
`;

const Label = styled.label`
  //max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
  text-align: left;
`;

const DatePicker = styled.div`
  width: 95%;
  padding-bottom: 4px;
  margin: 5px 0px  2px 0px ;
`;

const Input = styled.input`
  width: 50%;
  padding: 8px;
  float:left;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Select = styled.select`
  width: 19%;
  margin-right: 3px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const PickDate = styled.div`
  display: inline;
`;

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
      <BookingSys>
        <LogIn showLogIn={this.state.showLogIn}
          switchToLogin={this.switchToLogin} />
        <SignUp show={this.state.showSignUp}
          showLogIn={this.state.showLogIn}
          switchToLogin={this.switchToLogin}
        />

        <PricePerHour> $75/hr </PricePerHour>
        <Remindar>4 hours minimum</Remindar>
        <Discount>
          <p>8+ hour discount  &nbsp;&nbsp; 15%off</p>
        </Discount>

        <FormContainer>
          <Label>{'Date & Time'}</Label>
          <DatePicker>
            <Input type="date" className='datePicker' onChange={this.handleChange2}></Input>
            <PickDate>
              <Select className='start-time' onChange={this.handleChange2}>
                {this.props.times.map((time, index) => (
                  <option key={index}>{time}</option>
                ))}
              </Select>
              <Select className='end-time' value={this.state.endTime} onChange={this.handleChangeInEnd}>
                {this.props.times.slice(this.state.startIndex + 1).map((time, index) => (
                  <option key={index}>{time}</option>
                ))}
              </Select>
            </PickDate>
          </DatePicker>
          {/* <Label>Attendees</Label>
          <Select className="attendess-Select">
            <option>1 - 9 people</option>
            <option>10 -24 people</option>
            <option>25 - 39 people</option>
          </Select> */}
        </FormContainer>

        {this.state.minHoursAlert ? (<div className="min-hours-table">
          <div className="v-top" stye={{ 'max- width': '10%' }}>
            <img src={bulb} alt="" />
          </div>
          <div className="min-hours">
            <div className="min-hours-title"> 4 hour minimum</div>
            <div className="min-hours-content"> The host is more likely to accept if your request meets their minimum duration.</div>
          </div>
        </div>) : ('')}


        <div className='price'>
          <Label>Price</Label>
          <div className="col">
            <div className='price-detail-container'>
              <span className='price-detail'>
                $75.00 x {(this.state.endIndex - this.state.startIndex) / 2} hours:
            </span>
              <span className='price-total-detail'>  ${20 * (this.state.endIndex - this.state.startIndex)}</span>
            </div>
            <div className='processing-price'>
              <span className='processing'>Processing: </span>
              <span className='price-processing'>$12</span>
            </div>
          </div>
          <div className='total-container'>
            <Label >Total: </Label>
            <label className='total-price'>${20 * (this.state.endIndex - this.state.startIndex) + 12}</label>
          </div>
        </div>

        <button onClick={this.hanldeClick} className='request book'> Request to Book</button>

        <p className='notice'>Maria typically responds within 1 hr</p>
        <p>Cancel for free within 24 hours</p>

      </BookingSys >
    );
  }
}

export default Form;
