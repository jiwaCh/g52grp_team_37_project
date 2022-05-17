import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Timetable from './Timetable';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

const mockStore = configureMockStore([thunk]);

it('renders correctly without state', () => {
  const store = mockStore({
    timetable: {
      loading: false,
      timetable: [],
      busStopId: '',
      retrievedAt: undefined,
      error: undefined,
    },
  });

  const component = shallow(
    <Provider store={store}>
      <Timetable id="some id" />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly when loading', () => {
  const store = mockStore({
    timetable: {
      loading: true,
      timetable: [],
      busStopId: '',
      retrievedAt: undefined,
      error: undefined,
    },
  });

  const component = shallow(
    <Provider store={store}>
      <Timetable id="some id" />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly when loaded', () => {
  const store = mockStore({
    timetable: {
      loading: false,
      timetable: [
        { busId: '1234', busLine: '31', arrivalTime: '21:30', destination: 'Victoria Centre', color: '#DA487E' },
        { busId: '1235', busLine: '903', arrivalTime: '21:45', destination: 'University Park', color: '#18194f' },
        { busId: '1236', busLine: '34', arrivalTime: '22:00', destination: 'City Loop', color: '#E37222' },
      ],
      busStopId: '',
      retrievedAt: undefined,
      error: undefined,
    },
  });

  const component = shallow(
    <Provider store={store}>
      <Timetable id="some id" />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});
