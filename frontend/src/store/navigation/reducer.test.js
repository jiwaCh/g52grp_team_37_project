import reducer, { initialState } from './reducer';
import { Types } from './actions';

const dateSpy = jest.spyOn(global, 'Date');

xdescribe('timetable reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TIMETABLE', () => {
    const id = 'some id';
    expect(
      reducer(initialState, {
        type: Types.FETCH_TIMETABLE,
        payload: {
          id,
        },
      }),
    ).toEqual({
      ...initialState,
      busStopId: id,
    });
  });

  it('should handle FETCH_TIMETBALE_START', () => {
    expect(
      reducer(initialState, {
        type: Types.FETCH_TIMETABLE_START,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle FETCH_TIMETABLE_SUCCESS', () => {
    const timetable = 'some data';
    expect(
      reducer(initialState, {
        type: Types.FETCH_TIMETABLE_SUCCESS,
        payload: {
          timetable,
        },
      }),
    ).toEqual({
      ...initialState,
      timetable,
      retrievedAt: dateSpy.mock.instances[0],
    });
  });

  it('should handle FETCH_TIMETABLE_FAILED', () => {
    const error = 'some error';
    expect(
      reducer(initialState, {
        type: Types.FETCH_TIMETABLE_FAILED,
        payload: {
          error,
        },
      }),
    ).toEqual({
      ...initialState,
      error,
    });
  });

  it('should handle FETCH_TIMETABLE_END', () => {
    expect(
      reducer(initialState, {
        type: Types.FETCH_TIMETABLE_END,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
