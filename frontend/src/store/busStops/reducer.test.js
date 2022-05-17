import reducer, { initialState } from './reducer';
import { Types } from './actions';

describe('busStop reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_BUS_STOPS', () => {
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOP,
      }),
    ).toEqual(initialState);
  });

  it('should handle FETCH_BUS_STOPS_START', () => {
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOPS_START,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle FETCH_BUS_STOPS_SUCCESS', () => {
    const busStops = ['some', 'stops'];
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOPS_SUCCESS,
        payload: {
          busStops,
        },
      }),
    ).toEqual({
      ...initialState,
      busStops,
    });
  });

  it('should handle FETCH_BUS_STOPS_FAILED', () => {
    const error = 'some error';
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOPS_FAILED,
        payload: {
          error,
        },
      }),
    ).toEqual({
      ...initialState,
      error,
    });
  });

  it('should handle FETCH_BUS_STOPS_END', () => {
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOPS_END,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
