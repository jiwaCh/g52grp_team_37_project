import { Types } from './actions';

export const initialState = {
  loading: false,
  error: undefined,
  origin: null,
  destination: null,
  options: [],
  route: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_ORIGIN: {
      const { origin } = action.payload;
      return {
        ...state,
        origin,
      };
    }

    case Types.SET_DESTINATION: {
      const { destination } = action.payload;
      return {
        ...state,
        destination,
      };
    }

    case Types.SEARCH_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.SEARCH_END: {
      return {
        ...state,
        loading: false,
      };
    }

    case Types.SEARCH_SUCCESS: {
      const { options } = action.payload;
      return {
        ...state,
        options,
      };
    }

    case Types.SEARCH_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    }

    case Types.SET_ROUTE: {
      const { route } = action.payload;
      return {
        ...state,
        route,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
