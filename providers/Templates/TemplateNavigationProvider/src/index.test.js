//  Template Service Provider Test Suite
//
//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher et al. All Rights Reserved.

import TemplateServiceProvier from './index';
import { version, author, homepage } from '../package.json';

describe('Template Navigation Provider', () => {
  it('matches the navigation provider schema', () => {
    expect(typeof TemplateServiceProvier).toStrictEqual('function');
    expect(typeof TemplateServiceProvier.__meta__).toStrictEqual('object');
    expect(typeof TemplateServiceProvier.prototype.getStation).toStrictEqual('function');
    expect(typeof TemplateServiceProvier.prototype.getVehicle).toStrictEqual('function');
  });

  it('should have a slug of TMPLNAV', () => {
    expect(TemplateServiceProvier.__meta__.slug).toStrictEqual('TMPLNAV');
  });

  test('version, author, and support should be from package.json', () => {
    expect(TemplateServiceProvier.__meta__.version).toStrictEqual(version);
    expect(TemplateServiceProvier.__meta__.author).toStrictEqual(author);
    expect(TemplateServiceProvier.__meta__.support).toStrictEqual(homepage);
  });
});
