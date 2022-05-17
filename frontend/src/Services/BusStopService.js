import axios from 'axios';
import store from '../store';
import MockDataService from './MockDataService';
// import {API_BASE_URL} from '../config';
const API_BASE_URL = '';

class BuStopService {
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
    if (!this.instance) this.instance = new BuStopService();
    return this.instance;
  }

  /**
   * Get's bus stop details for a given bus stop
   *
   * @todo implement API
   * @param {string} id Bus Stop ID
   * @throws if API returns non-200 code
   */
  async getBusStop(id) {
    if (store.getState().debugToggle.checked) {
      return MockDataService.getBusStop(id);
    }

    try {
      const { data: busStop } = await this.apiInstance.get(`/busStop/${id}`);

      return busStop;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get's all bus stops from the API
   *
   * @returns {[object]} Array of bus stops
   * @throws if API returns non-200 code
   */
  async getBusStops() {
    if (store.getState().debugToggle.checked) {
      return MockDataService.getBusStops();
    }
    try {
      const { data: busStops } = await this.apiInstance.get('/busStop');

      return busStops;
    } catch (err) {
      throw err;
    }
  }
}

export default BuStopService;
