import { Types } from './actions';

export const initialState = {
  loading: false,
  name: '',
  lat: null,
  lng: null,
  busStopId: '',
  error: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_BUS_STOP: {
      const { id } = action.payload;
      return {
        ...state,
        busStopId: id,
      };
    }

    case Types.FETCH_BUS_STOP_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.FETCH_BUS_STOP_SUCCESS: {
      const {
        details: { name, lat, lng },
      } = action.payload;
      return {
        ...state,
        name,
        lat,
        lng,
      };
    }

    case Types.FETCH_BUS_STOP_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    }

    case Types.FETCH_BUS_STOP_END: {
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
