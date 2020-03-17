/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form.jsx';
// import App from '../index.jsx';
// const { times } = require('../components/times');
import times from '../components/times';

describe('form', () => {
  // it('should render correctly in "debug" mode', () => {
  //   const component = shallow(<Form debug />);
  //   expect(component).toMatchSnapshot();
  // });

  it('when user select a start time could change the state of start time', () => {
    const wrapper = shallow(<Form times = {times}/>);
    const startTime = wrapper.find('select.start-time');
    startTime.simulate('change', {
      target: { value: '8:00 am' },
    });
    expect(wrapper.state('startTime')).toEqual('8:00 am');
  });

  it('when user pick a date could change the state of chooseDate', () => {
    const wrapper = shallow(<Form times = {times}/>);
    const datePicker = wrapper.find('input.datePicker');
    datePicker.simulate('change', {
      target: { value: '2020-03-25' },
    });
    expect(wrapper.state('chooseDate')).toEqual('2020-03-25');
  });

  it('when user select a end time could change the state of end time', () => {
    const wrapper = shallow(<Form times = {times}/>);
    const endTime = wrapper.find('select.end-time');
    endTime.simulate('change', {
      target: { value: '21:00 am' },
    });
    expect(wrapper.state('endTime')).toEqual('21:00 am');
  });


  // it('end time should later than start time', () => {
  //   const wrapper = shallow(<Form />);
  //   const startTime = wrapper.find('select.start-time');
  //   startTime.to.have.length(32);
  // });
});
