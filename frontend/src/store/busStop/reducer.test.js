import reducer, { initialState } from './reducer';
import { Types } from './actions';

describe('busStop reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_BUS_STOP', () => {
    const id = 'some id';
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOP,
        payload: {
          id,
        },
      }),
    ).toEqual({
      ...initialState,
      busStopId: id,
    });
  });

  it('should handle FETCH_BUS_STOP_START', () => {
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOP_START,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle FETCH_BUS_STOP_SUCCESS', () => {
    const details = { name: 'some string', lat: 1.1, lng: 2.2 };
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOP_SUCCESS,
        payload: {
          details,
        },
      }),
    ).toEqual({
      ...initialState,
      name: details.name,
      lat: details.lat,
      lng: details.lng,
    });
  });

  it('should handle FETCH_BUS_STOP_FAILED', () => {
    const error = 'some error';
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOP_FAILED,
        payload: {
          error,
        },
      }),
    ).toEqual({
      ...initialState,
      error,
    });
  });

  it('should handle FETCH_BUS_STOP_END', () => {
    expect(
      reducer(initialState, {
        type: Types.FETCH_BUS_STOP_END,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
