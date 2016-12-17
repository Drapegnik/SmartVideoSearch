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
hackApp.controller('SearchCtrl', ['$scope', 'SearchService', function($scope, SearchService) {
  SearchService.customPOST({query: {query_string: {query: 'black car'}}}).then(function(res) {
    $scope.answer = res;
  });

  // SearchService.customPOST('_search', {query: {match: {message: 'this is a test'}}});
}]);
