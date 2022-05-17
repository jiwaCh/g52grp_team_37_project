//  Providers Autoloader Test Suite
//
//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher, Ali Sadah, Kun Ni, Charles Wilkins, Harry Coupe, Jiwa Chhetri. All Rights Reserved.
// const consoleErrorSpy = jest.spyOn(console, 'error'
import { loadProvidersFromDirectory, validateProvider } from './loadProviders';

const mockConsoleError = jest.fn();
console.error = mockConsoleError;

jest.mock('./config', () => ({
  providers: {
    someProvider: true,
  },
}));

jest.mock('../package.json', () => ({
  dependencies: {
    'g37-service-provider-mock': true,
    'g37-navigation-provider-mock': true,
  },
}));

describe('Providers Autoloader', () => {
  describe('validateProvider', () => {
    const mockSchema = [
      { name: 'someFunction', func: true, optional: false },
      { name: 'someProperty', func: false, optional: false },
      { name: 'optionalProperty', func: false, optional: true },
      { name: 'optionalFunction', func: true, optional: true },
    ];
    const provider = jest.fn();

    beforeEach(() => {
      jest.resetModules();
      mockConsoleError.mockReset();

      provider.mockReset();
      provider.__meta__ = { name: 'someProvider' };
      provider.prototype.someFunction = jest.fn();
      provider.prototype.someProperty = 'something';
      provider.prototype.optionalProperty = 'something else';
      provider.prototype.optionalFunction = jest.fn();
    });

    it('should pass with a valid provider', () => {
      const result = validateProvider(mockSchema, 'someProviderType', provider, 'someProvider');

      expect(result).toBe(true);
    });

    it('should fail if a required property is missing', () => {
      delete provider.prototype.someProperty;

      const result = validateProvider(mockSchema, 'someProviderType', provider, 'someProvider');

      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Failed to load someProviderType someProvider. someProviderType must have property someProperty.',
      );
    });

    it('should fail if a value property is a function', () => {
      provider.prototype.someProperty = jest.fn();

      const result = validateProvider(mockSchema, 'someProviderType', provider, 'someProvider');

      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Failed to load someProviderType someProvider. someProperty in someProviderType must not be a function.',
      );
    });

    it('should fail if a function property is not a function', () => {
      provider.prototype.someFunction = true;

      const result = validateProvider(mockSchema, 'someProviderType', provider, 'someProvider');

      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Failed to load someProviderType someProvider. someProviderType must have a valid someFunction function.',
      );
    });

    it('should fail if config is missing', () => {
      const result = validateProvider(mockSchema, 'someProviderType', provider, 'someOtherProvider');

      expect(result).toBe(false);
      expect(mockConsoleError).toHaveBeenCalledWith(
        'Failed to load someProviderType someOtherProvider. Missing configuration for someOtherProvider in config.js.',
      );
    });

    it('should pass with with a missing optional property', () => {
      delete provider.optionalProperty;

      const result = validateProvider(mockSchema, 'someProviderType', provider, 'someProvider');

      expect(result).toBe(true);
    });

    it('should pass with with a missing optional function', () => {
      delete provider.optionalFunction;

      const result = validateProvider(mockSchema, 'someProviderType', provider, 'someProvider');

      expect(result).toBe(true);
    });
  });

  xdescribe('loadProvidersFromDirectory', () => {
    beforeEach(() => {
      mockFs({
        '/Users/Aaron/Developer/g52grp_team_37_project/backend/src/Providers/SomeProviders': {
          SomeProvider: {
            'index.js': 'module.exports = true',
          },
          SomeOtherProvider: 'module.exports = true',
        },
      });
    });

    afterEach(() => {
      mockFs.restore();
    });

    it('should work', async () => {
      loadProvidersFromDirectory({}, 'SomeProvider');
    });
  });
});
