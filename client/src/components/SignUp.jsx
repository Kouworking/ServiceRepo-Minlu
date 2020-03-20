/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Button = styled.button`
width: 82%;
border: 5px #d11c1c;
background: #d11c1c;
font-size: 120%;
color:white;
border-radius: 10px;
`;

const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 80%;
  height: 80%;
  padding: 10%;
  background-color: rgba(0,0,0,0.2); /* Black w/ opacity */
`;

const Sign = styled.div`
  width: 500px;
  height: 500px;
  padding: 50;
  margin-right: auto;
  margin-left: auto;
  border-radius: 8px;
  background-color: white;
`;

const Title = styled.div`
  padding: 10%;
  font-size: x-large;
`;

const SignEmail = styled.input`
  width: 80%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 20px;
`;

const Toggle = styled.p`
  color: rgb(77, 149, 151);
  display: inline;
`;

const Policy = styled.div`
  text-align: center;
  font-size: smaller;
`;

const SignPassword = styled.input`
width: 80%;
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
margin-top: 20px;
`;
const Form = styled.form``;


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showLogIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleClick(event) {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
    console.log(axios);

    axios.post('/api/signUp', {
      email: this.state.email,
      password: this.state.password,
    }).then(() => {
      console.log('success');
    })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(event) {
    const nam = event.target.name;
    const val = event.target.value;
    console.log('in sign up: ', nam, val);
    this.setState({
      [nam]: val,
    });
  }

  render() {
    if (!this.props.show || this.props.showLogIn) {
      return null;
    }
    return (
      <Container>
        <Sign>
          <Title>Sign up to book this space</Title>
          <p>It's almost yours! Just let the host know who's asking.</p>

          <Form>
            <SignEmail
              className='SignEmail' name='email' placeholder='Email'
              onChange={this.handleChange} >
            </SignEmail>

            <SignPassword
              className='SignPassword' name='password' placeholder='Password'
              onChange={this.handleChange} >
            </SignPassword>
            <Button onClick={this.handleClick}
              className='submit' >Sign Up</Button>
          </Form>
          <Policy>
            <p>By clicking Sign Up, you agree to Peerspace's Services Agreement and Privacy Policy.</p>
            <div style={{ display: 'inline' }}>
              <p style={{ display: 'inline' }}>Already have an account?</p>
              <Toggle
                onClick={this.props.switchToLogin} className='toggle'>Log in</Toggle>
            </div>
          </Policy>
        </Sign>
      </Container>
    );
  }
}

export default SignUp;
