'use strict';

/**
 * Created by Drapegnik on 24.10.16.
 */

/**
 * @ngdoc service
 * @name hackApp.service:SearchService
 * @description
 * # SearchService
 * Search service wrap on rest angular method for api
 */
hackApp.factory('SearchService', ['Restangular', function(Restangular, elasticUrl) {
  return Restangular.oneUrl('/hackaton/_search', elasticUrl);
}]);
