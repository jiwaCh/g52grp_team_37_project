import React from 'react';
import App from './App';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(toJson(component)).toMatchSnapshot();
});
