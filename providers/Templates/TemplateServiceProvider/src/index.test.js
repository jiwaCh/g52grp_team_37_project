//  Template Navigation Provider Test Suite
//
//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher et al. All Rights Reserved.

import TemplateNavigationProvier from './index';
import { version, author, homepage } from '../package.json';

describe('Template Navigation Provider', () => {
  it('matches the navigation provider schema', () => {
    expect(typeof TemplateNavigationProvier).toStrictEqual('function');
    expect(typeof TemplateNavigationProvier.__meta__).toStrictEqual('object');
    expect(typeof TemplateNavigationProvier.prototype.getDirections).toStrictEqual('function');
  });

  it('should have a slug of TMPLNAV', () => {
    expect(TemplateNavigationProvier.__meta__.slug).toStrictEqual('TMPLNAV');
  });

  test('version, author, and support should be from package.json', () => {
    expect(TemplateNavigationProvier.__meta__.version).toStrictEqual(version);
    expect(TemplateNavigationProvier.__meta__.author).toStrictEqual(author);
    expect(TemplateNavigationProvier.__meta__.support).toStrictEqual(homepage);
  });
});
