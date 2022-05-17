import { createAction } from '../actionCreators';

export const TOGGLE = '[debug toggle] toggle';

export const Types = {
  TOGGLE,
};

export const Actions = {
  toggle: () => createAction(TOGGLE),
};

export const Thunks = {};
