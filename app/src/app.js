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
    'restangular'
  ]);

hackApp.config(['RestangularProvider', 'apiUrl', function(RestangularProvider, apiUrl) {
  RestangularProvider.setBaseUrl(apiUrl);
}]);