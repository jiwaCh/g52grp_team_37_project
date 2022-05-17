import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BusStopPage from './BusStopPage';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

const mockStore = configureMockStore([thunk]);

it('renders correctly with no bus stop loaded', () => {
  const store = mockStore({
    busStop: {
      loading: false,
      name: '',
      lat: null,
      lng: null,
      busStopId: '',
      error: undefined,
    },
  });

  const component = shallow(
    <Provider store={store}>
      <BusStopPage />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly when loading', () => {
  const store = mockStore({
    busStop: {
      loading: true,
      name: '',
      lat: null,
      lng: null,
      busStopId: '',
      error: undefined,
    },
  });

  const component = shallow(
    <Provider store={store}>
      <BusStopPage />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly when loaded', () => {
  const store = mockStore({
    busStop: {
      loading: false,
      name: 'someBusStop',
      lat: 1.2,
      lng: 1.1,
      busStopId: 'busstopId',
      error: undefined,
    },
  });

  const component = shallow(
    <Provider store={store}>
      <BusStopPage />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});
