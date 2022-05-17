import React from 'react';
import BusStopMap from './BusStopMap';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const props = {
    lat: 1.1,
    lng: 1.2,
  };

  const component = shallow(<BusStopMap {...props}>hello world</BusStopMap>);

  expect(toJson(component)).toMatchSnapshot();
});
