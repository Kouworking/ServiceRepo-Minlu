import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form.jsx';
describe('form', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Form debug />);

    expect(component).toMatchSnapshot();
  });
});