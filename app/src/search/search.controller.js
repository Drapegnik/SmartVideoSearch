'use strict';

/**
 * Created by Drapegnik on 24.10.16.
 */

/**
 * @ngdoc controller
 * @name hackApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hackApp for Searchs page
 */
hackApp.controller('SearchCtrl', ['$scope', 'SearchService', 'Restangular', function($scope, SearchService, Restangular) {
  SearchService.customPOST({query: {query_string: {query: 'black car'}}}).then(function(res) {
    $scope.elastic = res;
  });

  Restangular.oneUrl('/').get().then(function(res) {
    $scope.flask = res;
  });
}]);
