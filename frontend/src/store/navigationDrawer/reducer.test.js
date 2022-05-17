import reducer, { initialState } from './reducer';
import { Types } from './actions';

describe('navigation drawer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE', () => {
    expect(
      reducer(initialState, {
        type: Types.TOGGLE,
      }),
    ).toEqual({
      open: true,
    });
  });

  it('should open', () => {
    expect(
      reducer(
        {
          ...initialState,
          open: false,
        },
        {
          type: Types.TOGGLE,
        },
      ),
    ).toEqual({
      open: true,
    });
  });

  it('should handle close', () => {
    expect(
      reducer(
        {
          ...initialState,
          open: true,
        },
        {
          type: Types.TOGGLE,
        },
      ),
    ).toEqual({
      open: false,
    });
  });
});
