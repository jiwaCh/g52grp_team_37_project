import { Types } from './actions';

export const initialState = {
  loading: false,
  timetable: [],
  busStopId: '',
  retrievedAt: undefined,
  error: undefined,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_TIMETABLE: {
      const { id } = action.payload;
      return {
        ...state,
        busStopId: id,
      };
    }

    case Types.FETCH_TIMETABLE_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case Types.FETCH_TIMETABLE_SUCCESS: {
      const { timetable } = action.payload;
      return {
        ...state,
        timetable,
        retrievedAt: new Date(),
      };
    }

    case Types.FETCH_TIMETABLE_FAILED: {
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    }

    case Types.FETCH_TIMETABLE_END: {
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
