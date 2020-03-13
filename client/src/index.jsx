import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.jsx';
import Calender from './components/calendar.jsx'
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'
import "react-datepicker/dist/react-datepicker.css"
require('react-datepicker/dist/react-datepicker.css')

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

      <h1>booking system</h1>
      <Form />



    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));