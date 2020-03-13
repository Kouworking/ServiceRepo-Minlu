import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.jsx';
import Calender from './components/calendar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  render () {
    return (<div>
      <title>booking system</title>
      <Form />
      <Calender />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));