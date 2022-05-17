//  Template Navigation Provider
//  This file exports a class that complies with the NavigationProvider schema
//
//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher et al. All Rights Reserved.

import { version, author, homepage } from '../package.json';

class TemplateNavigationProvider {
  constructor(config) {
    this.key = config.key;
    this.client = new Client({});
  }

  getStation(id) {
    return id;
  }

  getVehicle(id) {
    return id;
  }
}

TemplateNavigationProvider.__meta__ = {
  name: 'Template Navigation Provider',
  slug: 'TMPLNAV',
  version,
  author,
  support: homepage,
};

export default TemplateNavigationProvider;
