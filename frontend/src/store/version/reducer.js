import { Types } from './actions';

export const initialState = {
  version: '0.0.0',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_VERSION: {
      const { version } = action.payload;

      return {
        ...state,
        version,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
