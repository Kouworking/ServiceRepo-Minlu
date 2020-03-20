/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Form from './components/Form.jsx';
import times from './components/times';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
    <div>
      <title>booking system</title>
      <Form times = {times}/>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
