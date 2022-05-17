import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BusStopsList from './BusStopsList';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

const mockStore = configureMockStore([thunk]);

it('renders correctly with no bus stop loaded', () => {
  const store = mockStore({
    busStops: {
      loading: false,
      error: undefined,
      busStops: [],
    },
  });

  const component = shallow(
    <Provider store={store}>
      <BusStopsList />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});
