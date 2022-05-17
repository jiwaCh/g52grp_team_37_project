import { Types } from './actions';

export const initialState = {
  open: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE: {
      return {
        ...state,
        open: !state.open,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
