import axios from 'axios';
import store from '../store';
import MockDataService from './MockDataService';
// import {API_BASE_URL} from '../config';
const API_BASE_URL = '';

class TimetableService {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        Accepts: 'application/json',
      },
    });
  }

  static getInstance() {
    if (!this.instance) this.instance = new TimetableService();
    return this.instance;
  }

  /**
   * Get's the timetable for a given bus stop
   *
   * @todo implement API
   * @param {string} id Bus Stop ID
   */
  async getTimetable(id) {
    if (store.getState().debugToggle.checked) {
      return MockDataService.getTimetable(id);
    }

    try {
      const { data: timetable } = await this.apiInstance.get(`/busStop/${id}/timetable`);
      return timetable;
    } catch (err) {
      throw err;
    }
  }
}

export default TimetableService;
