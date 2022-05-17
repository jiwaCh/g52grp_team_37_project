import { createAction, createThunkAction } from '../actionCreators';
import BusStopService from '../../Services/BusStopService';

export const FETCH_BUS_STOP = '[Bus Stop] fetch bus stop';
export const FETCH_BUS_STOP_START = '[Bus Stop] fetch bus stop start';
export const FETCH_BUS_STOP_SUCCESS = '[Bus Stop] fetch bus stop success';
export const FETCH_BUS_STOP_FAILED = '[Bus Stop] fetch bus stop failed';
export const FETCH_BUS_STOP_END = '[Bus Stop] fetch bus stop end';

export const Types = {
  FETCH_BUS_STOP,
  FETCH_BUS_STOP_END,
  FETCH_BUS_STOP_FAILED,
  FETCH_BUS_STOP_START,
  FETCH_BUS_STOP_SUCCESS,
};

export const Actions = {
  fetchBusStop: id => createAction(FETCH_BUS_STOP, { id }),
  fetchBusStopStart: () => createAction(FETCH_BUS_STOP_START),
  fetchBusStopFailed: error => createAction(FETCH_BUS_STOP_FAILED, { error }),
  fetchBusStopSuccess: details => createAction(FETCH_BUS_STOP_SUCCESS, { details }),
  fetchBusStopEnd: () => createAction(FETCH_BUS_STOP_END),
};

export const Thunks = {
  fetchBusStop: id =>
    createThunkAction(async dispatch => {
      const busStopService = BusStopService.getInstance();
      dispatch(Actions.fetchBusStop(id));
      try {
        dispatch(Actions.fetchBusStopStart());
        const busStop = await busStopService.getBusStop(id);
        dispatch(Actions.fetchBusStopSuccess(busStop));
      } catch (err) {
        dispatch(Actions.fetchBusStopFailed(err));
      }
      dispatch(Actions.fetchBusStopEnd());
    }),
};
