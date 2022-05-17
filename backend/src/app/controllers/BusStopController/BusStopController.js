//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher, Ali Sadah, Kun Ni, Charles Wilkins, Harry Coupe, Jiwa Chhetri. All Rights Reserved.

import { BAD_REQUEST, OK } from 'http-status-codes';
import { Request, Response, Router } from 'express';
import Database from '../../Services/Database/Datbase';

/**
 * Constroller for ingeracting with bus stops
 */
class BusStopController {
  /**
   * Static method that registers the BusStopController on the provided router
   *
   * Function should set the controllers routes and then register the contoller's router to the provided one
   *
   * @param {string} path path the controller can be accessed at
   * @param {Router} app express or Router instance
   */
  static register(path, app) {
    const router = new Router();
    const instance = new BusStopController();

    router.get('/:id', instance.getBusStop);
    router.get('/', instance.getBusStops);

    app.use(path, router);
  }

  /**
   * Controller constructor
   */
  constructor() {
    this.db = new Database();
  }

  /**
   * List all registered bus stops
   *
   * Method: GET
   * Path: `/`
   * Query Parameters: page, size
   *  - page {number} page being requested, defaults to 1
   *  - size {number} size of each page, defaults to 10
   *
   * Method returns a paginated list of reigstered bus stops.
   *
   * @param {Request} req Express Request Object
   * @param {Response} res Express Response Object
   */
  getBusStops(req, res) {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 10;

    if (page < 1 || size < 1) {
      return res.status(BAD_REQUEST).send('page and size must be greater than 0');
    }

    // this.db.getBusStops(size, page - 1);

    return res.status(OK).json({
      implemented: false,
      page,
      size,
    });
  }

  /**
   * Gets details about specific bus stop
   *
   * Method: GET
   * Path: `/:id`
   * Parameters: id
   *   - id {string} bus stop id
   *
   * @param {Request} req Express Requeust Object
   * @param {Response} res Express Response Object
   */
  getBusStop(req, res) {
    const id = req.params.id;

    if (!id) {
      return res.status(BAD_REQUEST).send('Must specify id');
    }

    // this.db.getBusStop(id);

    return res.status(OK).json({
      implemented: false,
      id,
    });
  }
}

export default BusStopController;
