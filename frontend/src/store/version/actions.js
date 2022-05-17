import { createAction } from '../actionCreators';

export const SET_VERSION = '[version] set version';

export const Types = {
  SET_VERSION,
};

export const Actions = {
  setVersion: version => createAction(SET_VERSION, { version }),
};

export const Thunks = {};
