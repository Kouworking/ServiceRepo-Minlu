import React from 'react';
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

const Login = styled.div`
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

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showLogIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('clicked');
  }

  render() {
    if (!this.props.showLogIn) {
      return null;
    }
    return (
      <Container>
        <Login>
          <Title>Welcome back</Title>
          <form className='signUp-info'>
            <SignEmail className='signUp-email' placeholder='Email'></SignEmail>
            <SignPassword className='signUp-password' placeholder='Password'></SignPassword>
            <Button className='signUp-button'>Log In</Button>
          </form>
          <Policy>
            <p style={{ display: 'inline' }}>Don't have an account?</p><Toggle onClick={this.props.switchToLogin} className='switch-to-log-in'>SignUp</Toggle>
          </Policy>

        </Login>
      </Container>
    );
  }
}

export default LogIn;
