import { createAction, createThunkAction } from '../actionCreators';
import TimetableService from '../../Services/TimetableService';

export const FETCH_TIMETABLE = '[timetable] fetch timetable';
export const FETCH_TIMETABLE_START = '[timetable] fetch timetable start';
export const FETCH_TIMETABLE_SUCCESS = '[timetable] fetch timetable success';
export const FETCH_TIMETABLE_FAILED = '[timetable] fetch timetable failed';
export const FETCH_TIMETABLE_END = '[timetable] fetch timetable end';

export const Types = {
  FETCH_TIMETABLE,
  FETCH_TIMETABLE_END,
  FETCH_TIMETABLE_FAILED,
  FETCH_TIMETABLE_START,
  FETCH_TIMETABLE_SUCCESS,
};

export const Actions = {
  fetchTimetable: id => createAction(FETCH_TIMETABLE, { id }),
  fetchTimetableStart: () => createAction(FETCH_TIMETABLE_START),
  fetchTimetableFailed: error => createAction(FETCH_TIMETABLE_FAILED, { error }),
  fetchTimetableSuccess: timetable => createAction(FETCH_TIMETABLE_SUCCESS, { timetable }),
  fetchTimetableEnd: () => createAction(FETCH_TIMETABLE_END),
};

export const Thunks = {
  fetchTimetable: id =>
    createThunkAction(async dispatch => {
      const timetableService = TimetableService.getInstance();
      dispatch(Actions.fetchTimetable(id));
      try {
        dispatch(Actions.fetchTimetableStart());
        const timetable = await timetableService.getTimetable(id);
        dispatch(Actions.fetchTimetableSuccess(timetable));
      } catch (err) {
        dispatch(Actions.fetchTimetableFailed(err));
      }
      dispatch(Actions.fetchTimetableEnd());
    }),
};
