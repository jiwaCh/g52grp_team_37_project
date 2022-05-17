//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher, Ali Sadah, Kun Ni, Charles Wilkins, Harry Coupe, Jiwa Chhetri. All Rights Reserved.

import bodyParser from 'body-parser';
import express from 'express';
import loadProviders from '../loadProviders';
import providers from '../middleware/providers';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(providers(loadProviders()));
app.use('/', routes);

export default app;
