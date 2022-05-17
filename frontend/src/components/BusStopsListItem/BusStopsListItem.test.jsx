import React from 'react';
import BusStopsListItem from './BusStopsListItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders correctly', () => {
  const props = {
    name: 'Some stop',
    id: '1234',
    alternate: false,
    buses: [],
  };

  const component = shallow(<BusStopsListItem {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});
