import reducer, { initialState } from './reducer';
import { Types } from './actions';

describe('version reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_VERSION', () => {
    expect(
      reducer(initialState, {
        type: Types.SET_VERSION,
        payload: {
          version: 'some version',
        },
      }),
    ).toEqual({
      version: 'some version',
    });
  });
});
