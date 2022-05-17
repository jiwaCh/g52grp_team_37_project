import React from 'react';
import BusStopsPage from './BusStopsPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

it('renders correctly', () => {
  const store = mockStore();

  const component = shallow(
    <Provider store={store}>
      <BusStopsPage />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});
