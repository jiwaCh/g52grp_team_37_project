import axios from 'axios';
import mockAxios from 'jest-mock-axios';
import BusStopService from './BusStopService';

jest.mock('../store', () => ({
  getState: () => ({
    debugToggle: {
      checked: false,
    },
  }),
}));

describe('BusStopService', () => {
  beforeEach(() => {
    // Reset instance between test as it will persist otherwise
    BusStopService.instance = undefined;
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('constructor', () => {
    const createSpy = jest.spyOn(axios, 'create');

    beforeEach(() => {
      createSpy.mockClear();
    });

    it('should createa an instance of axios', () => {
      new BusStopService();

      expect(createSpy).toHaveBeenCalledWith({
        baseURL: '',
        timeout: 10000,
        headers: {
          Accepts: 'application/json',
        },
      });
    });

    it('should set the instance as a property of the class', () => {
      const mockInstance = 'something';
      createSpy.mockReturnValueOnce(mockInstance);

      const timetableService = new BusStopService();

      expect(timetableService.apiInstance).toStrictEqual(mockInstance);
    });
  });

  describe('getInstance', () => {
    it('should return the static instance if there is one', () => {
      const mockInstance = 'something';
      BusStopService.instance = mockInstance;

      expect(BusStopService.getInstance()).toStrictEqual(mockInstance);
    });

    it('should call the constructor if there is no static instance', () => {
      const createSpy = jest.spyOn(axios, 'create');

      BusStopService.getInstance();

      // Because we can't mock the constructor without breaking the class we check if axios.create has been called
      expect(createSpy).toHaveBeenCalled();
    });

    it('should save a static instance if it creates one', () => {
      expect(BusStopService.instance).toStrictEqual(undefined);

      BusStopService.getInstance();

      expect(BusStopService.instance).not.toStrictEqual(undefined);
    });
  });

  // API interaction not implemented
  xdescribe('getBusStop', () => {
    const busStopService = new BusStopService();
    const id = 'someId';

    it('should make a get request', () => {
      busStopService.getBusStop(id);

      expect(mockAxios.get).toHaveBeenCalledWith(`/busStop/${id}`);
    });

    it('should return a busStop details object', async () => {
      const details = { id, name: 'Some bus stop' };
      const promise = busStopService.getBusStop(id);

      mockAxios.mockResponse({ data: details });

      const result = await promise;

      expect(result).toStrictEqual(details);
    });

    it('should throw an error if it fails to get the busStop', async () => {
      const error = new Error('FAIL!');
      const promise = busStopService.getBusStop(id);

      mockAxios.mockError(error);

      await expect(promise).rejects.toEqual(error);
    });
  });

  describe('getBusStops', () => {
    const busStopService = new BusStopService();

    it('should make a get request', () => {
      busStopService.getBusStops();

      expect(mockAxios.get).toHaveBeenCalledWith('/busStop');
    });

    it('should return a busStops array', async () => {
      const busStops = [
        { name: 'Jubilee Campus, The Exchange', id: 'RA63' },
        { name: 'University Park, Library Road', id: 'UN31' },
      ];
      const promise = busStopService.getBusStops();

      mockAxios.mockResponse({ data: busStops });

      const result = await promise;

      expect(result).toStrictEqual(busStops);
    });

    it('should throw an error if it fails to get the bus stops', async () => {
      const error = new Error('FAIL!');
      const promise = busStopService.getBusStops();

      mockAxios.mockError(error);

      await expect(promise).rejects.toEqual(error);
    });
  });
});
