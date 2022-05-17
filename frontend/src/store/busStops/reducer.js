import { Types } from './actions';

export const initialState = {
  loading: false,
  error: undefined,
  busStops: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_BUS_STOPS_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.FETCH_BUS_STOPS_SUCCESS: {
      const { busStops } = action.payload;
      return {
        ...state,
        busStops,
      };
    }

    case Types.FETCH_BUS_STOPS_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    }

    case Types.FETCH_BUS_STOPS_END: {
      return {
        ...state,
        loading: false,
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
