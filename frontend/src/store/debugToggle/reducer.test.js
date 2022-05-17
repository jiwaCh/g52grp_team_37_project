import reducer, { initialState } from './reducer';
import { Types } from './actions';

describe('debug toggle reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE', () => {
    expect(
      reducer(initialState, {
        type: Types.TOGGLE,
      }),
    ).toEqual({
      checked: !initialState.checked,
    });
  });

  it('should check', () => {
    expect(
      reducer(
        {
          ...initialState,
          checked: false,
        },
        {
          type: Types.TOGGLE,
        },
      ),
    ).toEqual({
      checked: true,
    });
  });

  it('should handle uncheck', () => {
    expect(
      reducer(
        {
          ...initialState,
          checked: true,
        },
        {
          type: Types.TOGGLE,
        },
      ),
    ).toEqual({
      checked: false,
    });
  });
});
