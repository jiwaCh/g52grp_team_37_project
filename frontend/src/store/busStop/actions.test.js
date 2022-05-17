import { Actions, Types, Thunks } from './actions';
import BusStopService from '../../Services/BusStopService';
const mockGetInstance = jest.fn();
const mockGetBusStop = jest.fn();
jest.mock('../../Services/BusStopService', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getBusStop: mockGetBusStop,
    };
  });
});
BusStopService.getInstance = mockGetInstance;

describe('actions', () => {
  it('should create fetch bus stop action', () => {
    const id = 'some string';
    const expectedAction = {
      type: Types.FETCH_BUS_STOP,
      payload: {
        id,
      },
    };

    expect(Actions.fetchBusStop(id)).toEqual(expectedAction);
  });

  it('should create fetch bus stop start action', () => {
    const expectedAction = {
      type: Types.FETCH_BUS_STOP_START,
    };

    expect(Actions.fetchBusStopStart()).toEqual(expectedAction);
  });

  it('should create fetch bus stop failed action', () => {
    const error = 'some string';
    const expectedAction = {
      type: Types.FETCH_BUS_STOP_FAILED,
      payload: {
        error,
      },
    };

    expect(Actions.fetchBusStopFailed(error)).toEqual(expectedAction);
  });

  it('should create fetch bus stop success action', () => {
    const details = ['some', 'values'];
    const expectedAction = {
      type: Types.FETCH_BUS_STOP_SUCCESS,
      payload: {
        details,
      },
    };

    expect(Actions.fetchBusStopSuccess(details)).toEqual(expectedAction);
  });

  it('should create fetch bus stop end action', () => {
    const expectedAction = {
      type: Types.FETCH_BUS_STOP_END,
    };

    expect(Actions.fetchBusStopEnd()).toEqual(expectedAction);
  });

  describe('fetchBusStop thunk', () => {
    beforeEach(() => {
      mockGetInstance.mockClear();
      mockGetBusStop.mockClear();
      mockGetInstance.mockReturnValue(new BusStopService());
    });

    it('dispatches a fetchBusStop action', async () => {
      const id = 'some string';
      const dispatch = jest.fn();
      await Thunks.fetchBusStop(id)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStop(id));
    });

    it('dispatches a fetchBusStop start action', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchBusStop('something')(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopStart());
    });

    it('requests a bus stop from the bus stop service', async () => {
      const id = 'some string';
      const dispatch = jest.fn();
      await Thunks.fetchBusStop(id)(dispatch);

      expect(mockGetInstance).toHaveBeenCalledTimes(1);
      expect(mockGetBusStop).toHaveBeenCalledTimes(1);
      expect(mockGetBusStop).toHaveBeenCalledWith(id);
    });

    describe('when bus stop is retrieved succesfully', () => {
      const details = ['some', 'data'];
      beforeEach(() => {
        mockGetBusStop.mockResolvedValue(details);
      });

      it('dispatches success', async () => {
        const dispatch = jest.fn();
        await Thunks.fetchBusStop('some id')(dispatch);

        expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopSuccess(details));
      });
    });

    describe('describe when fetching a bus stop fails', () => {
      const error = new Error('FAIL');
      beforeEach(() => {
        mockGetBusStop.mockRejectedValue(error);
      });

      it('dispatches failure', async () => {
        const dispatch = jest.fn();
        await Thunks.fetchBusStop('some id')(dispatch);

        expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopFailed(error));
      });
    });

    it('dispatches a fetchBusStop end action', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchBusStop('something')(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopEnd());
    });
  });
});
