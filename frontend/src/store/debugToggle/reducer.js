import { Types } from './actions';

export const initialState = {
  checked: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE: {
      return {
        ...state,
        checked: !state.checked,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
