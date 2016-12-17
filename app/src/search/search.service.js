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
hackApp.factory('SearchService', ['Restangular', 'elasticUrl', function(Restangular, elasticUrl) {
  return (Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(elasticUrl);
  })).oneUrl('/hackaton/_search');
}]);
