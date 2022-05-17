import { Actions, Types, Thunks } from './actions';
import BusStopService from '../../Services/BusStopService';
const mockGetInstance = jest.fn();
const mockGetBusStops = jest.fn();
jest.mock('../../Services/BusStopService', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getBusStops: mockGetBusStops,
    };
  });
});
BusStopService.getInstance = mockGetInstance;

describe('actions', () => {
  it('should create fetch bus stops action', () => {
    const expectedAction = {
      type: Types.FETCH_BUS_STOPS,
    };

    expect(Actions.fetchBusStops()).toEqual(expectedAction);
  });

  it('should create fetch bus stops start action', () => {
    const expectedAction = {
      type: Types.FETCH_BUS_STOPS_START,
    };

    expect(Actions.fetchBusStopsStart()).toEqual(expectedAction);
  });

  it('should create fetch bus stops failed action', () => {
    const error = 'some string';
    const expectedAction = {
      type: Types.FETCH_BUS_STOPS_FAILED,
      payload: {
        error,
      },
    };

    expect(Actions.fetchBusStopsFailed(error)).toEqual(expectedAction);
  });

  it('should create fetch bus stops success action', () => {
    const busStops = ['some', 'values'];
    const expectedAction = {
      type: Types.FETCH_BUS_STOPS_SUCCESS,
      payload: {
        busStops,
      },
    };

    expect(Actions.fetchBusStopsSuccess(busStops)).toEqual(expectedAction);
  });

  it('should create fetch bus stops end action', () => {
    const expectedAction = {
      type: Types.FETCH_BUS_STOPS_END,
    };

    expect(Actions.fetchBusStopsEnd()).toEqual(expectedAction);
  });

  describe('fetchBusStops thunk', () => {
    beforeEach(() => {
      mockGetInstance.mockClear();
      mockGetBusStops.mockClear();
      mockGetInstance.mockReturnValue(new BusStopService());
    });

    it('dispatches a fetchBusStops action', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchBusStops()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStops());
    });

    it('dispatches a fetchBusStops start action', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchBusStops()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopsStart());
    });

    it('requests bus stops from the bus stop service', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchBusStops()(dispatch);

      expect(mockGetInstance).toHaveBeenCalledTimes(1);
      expect(mockGetBusStops).toHaveBeenCalledTimes(1);
      expect(mockGetBusStops).toHaveBeenCalledWith();
    });

    describe('when bus stops are retrieved succesfully', () => {
      const busStops = ['some', 'data'];
      beforeEach(() => {
        mockGetBusStops.mockResolvedValue(busStops);
      });

      it('dispatches success', async () => {
        const dispatch = jest.fn();
        await Thunks.fetchBusStops()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopsSuccess(busStops));
      });
    });

    describe('describe when fetching bus stops fails', () => {
      const error = new Error('FAIL');
      beforeEach(() => {
        mockGetBusStops.mockRejectedValue(error);
      });

      it('dispatches failure', async () => {
        const dispatch = jest.fn();
        await Thunks.fetchBusStops()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopsFailed(error));
      });
    });

    it('dispatches a fetchBusStop end action', async () => {
      const dispatch = jest.fn();
      await Thunks.fetchBusStops()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(Actions.fetchBusStopsEnd());
    });
  });
});
