import React from 'react';

const Form = (props) => (
  <div>
    <h4> $75/hr </h4>
    <p>4 hr min</p>
    {'Date & Time'}
    <select className={'date'}>
      <option>Mar 26, 2020</option>
      <option>Mar 27, 2020</option>
    </select>
  </div>
)

export default Form;