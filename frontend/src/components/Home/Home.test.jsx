import React from 'react';
import Home from './Home';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const component = shallow(<Home />);
  expect(toJson(component)).toMatchSnapshot();
});
