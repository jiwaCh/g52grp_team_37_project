//  Providers Autoloader
//  This file exports a function that valiates and initializes all valid providers in the Providers directory.
//  NavigationProviders must be in src/Providers/NavigationProviders
//  ServiceProviders must be in src/Providers/ServiceProviders
//
//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher et al. All Rights Reserved.

import { providers as configs } from './config';
import { dependencies } from '../package.json';

/**
 * NavigationProvider Schema
 *
 * Each array element represents a property that's expected on a correctly implemented NavigationProperty object.
 *
 * @property name {string} the name of the property
 * @property func {boolean} whether or not the property is a function
 * @property optional {boolean} whether or not the property is optional. Note that the validator will not validate the signature of the property if it's optional.
 */
const navigationProviderSchema = [{ name: 'getDirections', func: true, optional: false }];

/**
 * ServiceProvider Schema
 *
 * Each array element represents a property that's expected on a correctly implemented ServiceProvider object.
 *
 * @property name {string} the name of the property
 * @property func {boolean} whether or not the property is a function
 * @property optional {boolean} whether or not the property is optional. Note that the validator will not validate the signature of the property if it's optional.
 */
const serviceProviderSchema = [
  { name: 'getStation', func: true, optional: false },
  { name: 'getVehicle', func: true, optional: false },
];

/**
 * Function for validating a proivider against a provider schema.
 *
 * This method loops over each property in the provided schema, and checks the provider against the conditions.
 * If the property is marked as optional, the validator will skip the property.
 * The validator checks that the configuration for the provider can be found in `config.js`.
 * The validator does **NOT** do a deep diff on object properties. Malformed properties like `__meta__` will result in runtime errors.
 *
 * `__meta__` should look like:
 * ```
 * {
 *  name: '<Provider Name>',
 *  version: '<Provider Version>',
 *  author: '<Provider Author>',
 *  support: '<Provider Support URL>',
 * }
 * ```
 *
 * @param {Array<{name: string, func: boolean, optional: boolean}>} schema The schema to check the provider against
 * @param {string} providerType The type of provider being validated. Only used for error messages.
 * @param {any} provider The provider object.
 * @param {string} providerName The provider name. Only used for error messages.
 * @returns {boolean} Returns false if the provider is invalid. Otherwise returns true.
 */
export const validateProvider = (schema, providerType, provider, providerName) => {
  for (const property of schema) {
    if (property.optional) {
      continue;
    }

    if (!provider.prototype.hasOwnProperty(property.name)) {
      console.error(
        `Failed to load ${providerType} ${providerName}. ${providerType} must have property ${property.name}.`,
      );
      return false;
    }

    if (property.func && typeof provider.prototype[property.name] !== 'function') {
      console.error(
        `Failed to load ${providerType} ${providerName}. ${providerType} must have a valid ${property.name} function.`,
      );
      return false;
    }

    if (!property.func && typeof provider.prototype[property.name] === 'function') {
      console.error(
        `Failed to load ${providerType} ${providerName}. ${property.name} in ${providerType} must not be a function.`,
      );
      return false;
    }
  }

  if (!configs.hasOwnProperty(providerName)) {
    console.error(
      `Failed to load ${providerType} ${providerName}. Missing configuration for ${providerName} in config.js.`,
    );
    return false;
  }

  return true;
};

/**
 * Function for finding and loading providers
 *
 * This function loads providers with the specified dependecy prefix.
 * The function will then validate each provider against it's schema and then attempt to intialize it.
 * The function will ignore any invalid providers. The function will throw if any valid provider fails to initialize.
 * The function will look for every sub direcotry in the corresponding provider directories. It will then attempt to load each provider from it's index.js file.
 *
 * @param {Array<{name: string, func: boolean, optional: boolean}>} providerSchema the schema of the providers being loadded.
 * @param {string} providerType the type of provider being loaded. This shoud be the dependency prefix for the type of providers being loaded.
 * @returns {Promise<Array<any>>} containing intialized providers
 * @throws If the provider intialisation function throws an error on provider.init. This error should not be recoverable and the application should quit as it won't be able to access any providers.
 */
export const loadProvidersFromDependencies = (providerSchema, providerType) => {
  const packages = Object.keys(dependencies);
  const providerPackages = packages.filter(
    (providerPackage) => providerPackage.substring(0, providerType.length) === providerType,
  );

  const providers = {};

  for (const providerPackage of providerPackages) {
    console.log(providerPackage);
    const provider = require(providerPackage).default;

    if (!validateProvider(providerSchema, providerType, provider, providerPackage)) {
      continue;
    }

    try {
      providers[providerPackage] = new provider(configs[providerPackage]);
      console.info(`Succesfully loaded ${provider.__meta__.name} version ${provider.__meta__.version}.`);
      continue;
    } catch (e) {
      console.error(`Succesfully loaded ${providerType} ${providerPackage}. An intialization error occured.`);
      throw e;
    }
  }

  return providers;
};

/**
 * Function for loading providers
 *
 * This function loads SerivceProviders and NavigationProviders using the loadProvidersFromDirectory function
 *
 * @returns {Promise<{navigationProviders: any, serviceProviders: any}>} Object containing initialized NavgiationProviders and ServiceProviders.
 * @throws If the provider intialisation function throws an error on provider.init. This error should not be recoverable and the application should quit as it won't be able to access any providers.
 */
export const loadProviders = () => {
  const providers = {
    navigationProviders: loadProvidersFromDependencies(navigationProviderSchema, 'g37-navigation-provider'),
    serviceProviders: loadProvidersFromDependencies(serviceProviderSchema, 'g37-service-provider'),
  };

  return providers;
};

export default loadProviders;
