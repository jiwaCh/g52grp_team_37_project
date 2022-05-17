import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './Header';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

const mockStore = configureMockStore([thunk]);

it('renders correctly', () => {
  const store = mockStore({
    navigationDrawer: { open: false },
  });

  const component = shallow(
    <Provider store={store}>
      <Header />
    </Provider>,
  );

  expect(toJson(component)).toMatchSnapshot();
});
