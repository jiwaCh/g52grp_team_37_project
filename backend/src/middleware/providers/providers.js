//  Providers Middleware
//
//  Author: Aaron Osher <psyao5@nottingham.ac.uk>
//  Copyright (c) 2020. Aaron Osher et al. All Rights Reserved.

import { providerDefaults } from '../../config';

/**
 * Injected Providers middleware
 *
 * Middleware for accessing dependcy injected service and navigation providers
 *
 * Adds `providers.navigation` and `providers.service` objects to `req` object
 *
 * @param {object} providers object returned by loadProviders utility
 * @returns {void}
 */
const useProviders = (providers) => (req, _res, next) => {
  // Load default providers from config
  const defaultNavigation = providerDefaults.navigation;
  const defaultService = providerDefaults.service;

  // Cerate navigation and service objects
  const navigation = {
    prototype: {
      providers: {},
    },
  };
  const service = {
    prototype: {
      providers: {},
    },
  };

  // Add providers to the navigation and service objects
  for (const navigationProvider of Object.values(providers.navigationproviders)) {
    navigation.prototype.providers[navigationProvider.__meta__.slug] = navigationProvider;
  }

  for (const serviceProvider of Object.values(providers.serviceProviders)) {
    service.prototype.providers[serviceProvider.__meta__.slug] = serviceProvider;
  }

  // Map functions that the controllers can access
  navigation.getDirections = (origin, destination, provider = defaultNavigation) =>
    navigation.prototype.providers[provider].getDirections(origin, destination);

  service.getStation = (id, provider = defaultService) => service.prototype.providers[provider].getStation(id);
  service.getVehicle = (id, provider = defaultService) => service.prototype.providers[provider].getVehicle(id);

  // Set object on req
  req.providers = {
    navigation,
    service,
  };

  next();
};

export { useProviders };
