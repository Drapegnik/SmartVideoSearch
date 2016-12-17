'use strict';

/**
 * Created by Drapegnik on 24.10.16.
 */

/**
 * @ngdoc service
 * @name hackApp.service:UserService
 * @description
 * # UserService
 * User service wrap on rest angular method for api
 */
hackApp.factory('UserService', ['Restangular', function(Restangular) {
  return Restangular.service('users');
}]);
