import { createAction, createThunkAction } from '../actionCreators';
import { push } from 'connected-react-router';
import MockDataService from '../../Services/MockDataService';

export const SEARCH = '[navigation] search';
export const SEARCH_START = '[navigation] start search';
export const SEARCH_SUCCESS = '[navigation] search success';
export const SEARCH_FAILED = '[navigation] search failed';
export const SEARCH_END = '[navigation] search end';
export const SET_ORIGIN = '[navigation] set origin';
export const SET_DESTINATION = '[navigation] set destination';
export const SET_ROUTE = '[navigation] set route';

export const Types = {
  SEARCH,
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  SEARCH_END,
  SET_ORIGIN,
  SET_DESTINATION,
  SET_ROUTE,
};

export const Actions = {
  search: (origin, destination) => createAction(SEARCH, { origin, destination }),
  searchStart: () => createAction(SEARCH_START),
  searchSuccess: options => createAction(SEARCH_SUCCESS, { options }),
  searchFailed: error => createAction(SEARCH_FAILED, { error }),
  searchEnd: () => createAction(SEARCH_END),
  setOrigin: origin => createAction(SET_ORIGIN, { origin }),
  setDestination: destination => createAction(SET_DESTINATION, { destination }),
  setRoute: route => createAction(SET_ROUTE, { route }),
};

export const Thunks = {
  search: (origin, destination) =>
    createThunkAction(async dispatch => {
      dispatch(Actions.search(origin, destination));
      try {
        dispatch(Actions.searchStart());
        const options = MockDataService.getNavigationOptions();
        dispatch(Actions.searchSuccess(options));
        dispatch(push('/navigation/options'));
      } catch (err) {
        dispatch(Actions.searchFailed(err));
      }
      dispatch(Actions.searchEnd());
    }),
};
