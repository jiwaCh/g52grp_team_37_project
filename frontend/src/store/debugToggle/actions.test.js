import { Actions, Types } from './actions';

describe('actions', () => {
  it('should create a toggle action', () => {
    const expectedAction = {
      type: Types.TOGGLE,
    };

    expect(Actions.toggle()).toEqual(expectedAction);
  });
});
