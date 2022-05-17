//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher, Ali Sadah, Kun Ni, Charles Wilkins, Harry Coupe, Jiwa Chhetri. All Rights Reserved.

import app from './app';
import { server as serverConfig } from './config';

app.listen(serverConfig.PORT, () => {
  console.log(`Running on port ${serverConfig.PORT}`);
});
