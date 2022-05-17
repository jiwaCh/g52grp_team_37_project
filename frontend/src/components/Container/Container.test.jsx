import React from 'react';
import Container from './Container';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const component = shallow(<Container />);
  expect(toJson(component)).toMatchSnapshot();
});
