import { createAction, createThunkAction } from '../actionCreators';
import BusStopService from '../../Services/BusStopService';

export const FETCH_BUS_STOPS = '[Bus Stops] fetch bus stops';
export const FETCH_BUS_STOPS_START = '[Bus Stops] fetch bus stops start';
export const FETCH_BUS_STOPS_SUCCESS = '[Bus Stops] fetch bus stops success';
export const FETCH_BUS_STOPS_FAILED = '[Bus Stops] fetch bus stops failed';
export const FETCH_BUS_STOPS_END = '[Bus Stops] fetch bus stops end';

export const Types = {
  FETCH_BUS_STOPS,
  FETCH_BUS_STOPS_END,
  FETCH_BUS_STOPS_FAILED,
  FETCH_BUS_STOPS_START,
  FETCH_BUS_STOPS_SUCCESS,
};

export const Actions = {
  fetchBusStops: () => createAction(FETCH_BUS_STOPS),
  fetchBusStopsStart: () => createAction(FETCH_BUS_STOPS_START),
  fetchBusStopsFailed: error => createAction(FETCH_BUS_STOPS_FAILED, { error }),
  fetchBusStopsSuccess: busStops => createAction(FETCH_BUS_STOPS_SUCCESS, { busStops }),
  fetchBusStopsEnd: () => createAction(FETCH_BUS_STOPS_END),
};

export const Thunks = {
  fetchBusStops: () =>
    createThunkAction(async dispatch => {
      const busStopService = BusStopService.getInstance();
      dispatch(Actions.fetchBusStops());
      try {
        dispatch(Actions.fetchBusStopsStart());
        const busStops = await busStopService.getBusStops();
        dispatch(Actions.fetchBusStopsSuccess(busStops));
      } catch (err) {
        dispatch(Actions.fetchBusStopsFailed(err));
      }
      dispatch(Actions.fetchBusStopsEnd());
    }),
};
