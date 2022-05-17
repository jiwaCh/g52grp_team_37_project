import React from 'react';
import TimetableItem from './TimetableItem';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const props = {
    busLine: '31',
    time: '20:20',
    destination: 'Victora Centre',
    alternate: false,
    color: '#E37222',
  };

  const component = shallow(<TimetableItem {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});
