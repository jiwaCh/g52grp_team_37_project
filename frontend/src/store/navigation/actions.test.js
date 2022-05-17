import { Actions, Types, Thunks } from './actions';
import TimetableService from '../../Services/TimetableService';
const mockGetInstance = jest.fn();
const mockGetTimetable = jest.fn();
jest.mock('../../Services/TimetableService', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getTimetable: mockGetTimetable,
    };
  });
});
TimetableService.getInstance = mockGetInstance;

xdescribe('actions', () => {
  it('should create fetch timetable action', () => {
    const id = 'some string';
    const expectedAction = {
      type: Types.FETCH_TIMETABLE,
      payload: {
        id,
      },
    };

    expect(Actions.fetchTimetable(id)).toEqual(expectedAction);
  });

  it('should create fetch timetable start action', () => {
    const expectedAction = {
      type: Types.FETCH_TIMETABLE_START,
    };

    expect(Actions.fetchTimetableStart()).toEqual(expectedAction);
  });

  it('should create fetch timetable failed action', () => {
    const error = 'some string';
    const expectedAction = {
      type: Types.FETCH_TIMETABLE_FAILED,
      payload: {
        error,
      },
    };

    expect(Actions.fetchTimetableFailed(error)).toEqual(expectedAction);
  });

  it('should create fetch timetable success action', () => {
    const timetable = ['some', 'values'];
    const expectedAction = {
      type: Types.FETCH_TIMETABLE_SUCCESS,
      payload: {
        timetable,
      },
    };

    expect(Actions.fetchTimetableSuccess(timetable)).toEqual(expectedAction);
  });

  it('should create fetch tiemteable end action', () => {
    const expectedAction = {
      type: Types.FETCH_TIMETABLE_END,
    };

    expect(Actions.fetchTimetableEnd()).toEqual(expectedAction);
  });

  describe('fetchTimetable thunk', () => {
    beforeEach(() => {
      mockGetInstance.mockClear();
      mockGetTimetable.mockClear();
      mockGetInstance.mockReturnValue(new TimetableService());
    });

    it('dispatches a fetchTimetable action', async () => {
      const id = 'some string';
      const dispatch = jest.fn();
      await Thunks.fetchTimetable(id)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchTimetable(id));
    });

    it('dispatches a fetchTimetable start action', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchTimetable('something')(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchTimetableStart());
    });

    it('requests a timetable from the timetable service', async () => {
      const id = 'some string';
      const dispatch = jest.fn();
      await Thunks.fetchTimetable(id)(dispatch);

      expect(mockGetInstance).toHaveBeenCalledTimes(1);
      expect(mockGetTimetable).toHaveBeenCalledTimes(1);
      expect(mockGetTimetable).toHaveBeenCalledWith(id);
    });

    describe('when timetable is retrieved succesfully', () => {
      const timetable = ['some', 'data'];
      beforeEach(() => {
        mockGetTimetable.mockResolvedValue(timetable);
      });

      it('dispatches success', async () => {
        const dispatch = jest.fn();
        await Thunks.fetchTimetable('some id')(dispatch);

        expect(dispatch).toHaveBeenCalledWith(Actions.fetchTimetableSuccess(timetable));
      });
    });

    describe('describe when fetching a timetable fails', () => {
      const error = new Error('FAIL');
      beforeEach(() => {
        mockGetTimetable.mockRejectedValue(error);
      });

      it('dispatches failure', async () => {
        const dispatch = jest.fn();
        await Thunks.fetchTimetable('some id')(dispatch);

        expect(dispatch).toHaveBeenCalledWith(Actions.fetchTimetableFailed(error));
      });
    });

    it('dispatches a fetchTimetable end action', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchTimetable('something')(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchTimetableEnd());
    });
  });
});
