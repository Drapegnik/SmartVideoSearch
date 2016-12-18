'use strict';

/**
 * @ngdoc overview
 * @name hackApp
 * @description
 * # hackApp
 *
 * Main module of the application.
 */
var hackApp = angular
  .module('hackApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'angucomplete-alt'
  ]);

hackApp.config(['RestangularProvider', 'apiUrl', function(RestangularProvider, apiUrl) {
  RestangularProvider.setBaseUrl(apiUrl);
}]);
