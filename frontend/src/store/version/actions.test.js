import { Actions, Types } from './actions';

describe('actions', () => {
  it('should create an action to set the version', () => {
    const version = 'some version';
    const expectedAction = {
      type: Types.SET_VERSION,
      payload: {
        version,
      },
    };

    expect(Actions.setVersion(version)).toEqual(expectedAction);
  });
});
