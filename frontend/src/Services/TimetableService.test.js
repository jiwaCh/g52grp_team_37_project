import axios from 'axios';
import mockAxios from 'jest-mock-axios';
import TimetableService from './TimetableService';

jest.mock('../store', () => ({
  getState: () => ({
    debugToggle: {
      checked: false,
    },
  }),
}));

describe('TimetableService', () => {
  beforeEach(() => {
    // Reset instance between test as it will persist otherwise
    TimetableService.instance = undefined;
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
      new TimetableService();

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

      const timetableService = new TimetableService();

      expect(timetableService.apiInstance).toStrictEqual(mockInstance);
    });
  });

  describe('getInstance', () => {
    it('should return the static instance if there is one', () => {
      const mockInstance = 'something';
      TimetableService.instance = mockInstance;

      expect(TimetableService.getInstance()).toStrictEqual(mockInstance);
    });

    it('should call the constructor if there is no static instance', () => {
      const createSpy = jest.spyOn(axios, 'create');

      TimetableService.getInstance();

      // Because we can't mock the constructor without breaking the class we check if axios.create has been called
      expect(createSpy).toHaveBeenCalled();
    });

    it('should save a static instance if it creates one', () => {
      expect(TimetableService.instance).toStrictEqual(undefined);

      TimetableService.getInstance();

      expect(TimetableService.instance).not.toStrictEqual(undefined);
    });
  });

  // API interaction not implemented
  describe('getTimetable', () => {
    const timetableService = new TimetableService();
    const id = 'someId';

    it('should make a get request', () => {
      timetableService.getTimetable(id);

      expect(mockAxios.get).toHaveBeenCalledWith(`/busStop/${id}/timetable`);
    });

    it('should return an array of timetable entries', async () => {
      const timetable = [1, 2, 3];
      const promise = timetableService.getTimetable(id);

      mockAxios.mockResponse({ data: timetable });

      await expect(promise).resolves.toStrictEqual(timetable);
    });

    it('should throw and error if it fails to get the timetable', async () => {
      const error = new Error('FAIL!');
      const promise = timetableService.getTimetable(id);

      mockAxios.mockError(error);

      await expect(promise).rejects.toEqual(error);
    });
  });
});
