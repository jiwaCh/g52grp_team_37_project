//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher, Ali Sadah, Kun Ni, Charles Wilkins, Harry Coupe, Jiwa Chhetri. All Rights Reserved.

import BusStopController from './controllers/BusStopController';
import { Router } from 'express';

const routes = Router();

BusStopController.register('/busStop', routes);

export default routes;
