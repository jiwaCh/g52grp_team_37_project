//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher, Ali Sadah, Kun Ni, Charles Wilkins, Harry Coupe, Jiwa Chhetri. All Rights Reserved.

import { BAD_REQUEST, OK } from 'http-status-codes';
import BusStopController from './BusStopController';
import express from 'express';
import request from 'supertest';

const app = express();
BusStopController.register('/', app);

describe('Bus Stop Controller', () => {
  // afterEach(() => {
  //   app.
  // });

  describe('/ getBusStops', () => {
    it('should return OK by default', async (done) => {
      await request(app).get('/').expect('Content-Type', /json/).expect(OK, {
        implemented: false,
        page: 1,
        size: 10,
      });

      done();
    });

    it('should set size when ?size is set', async (done) => {
      await request(app).get('/?size=100').expect('Content-Type', /json/).expect(OK, {
        implemented: false,
        page: 1,
        size: 100,
      });

      await request(app).get('/?size=10').expect('Content-Type', /json/).expect(OK, {
        implemented: false,
        page: 1,
        size: 10,
      });

      done();
    });

    it('should return BAD_REQUEST if ?size is less than 1', async (done) => {
      await request(app).get('/?size=-1').expect(BAD_REQUEST);

      done();
    });

    it('should set page when ?page is set', async (done) => {
      await request(app).get('/?page=100').expect('Content-Type', /json/).expect(OK, {
        implemented: false,
        page: 100,
        size: 10,
      });

      await request(app).get('/?page=1').expect('Content-Type', /json/).expect(OK, {
        implemented: false,
        page: 1,
        size: 10,
      });

      done();
    });

    it('should return BAD_REQUEST if ?page is less than 1', async (done) => {
      await request(app).get('/?page=-1').expect(BAD_REQUEST);

      done();
    });
  });

  describe('/:id getBusStop', () => {
    it('should respond OK by default', async (done) => {
      await request(app).get('/12').expect('Content-Type', /json/).expect(OK, {
        implemented: false,
        id: '12',
      });

      done();
    });
  });
});
