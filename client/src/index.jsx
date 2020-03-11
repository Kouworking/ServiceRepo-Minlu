import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  render () {
    return (<div>
      <h1>booking system</h1>
      <Form />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));