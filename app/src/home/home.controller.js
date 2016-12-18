'use strict';

/**
 * Created by Drapegnik on 20.10.16.
 */

/**
 * @ngdoc controller
 * @name hackApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the hackApp for home page
 */
hackApp.controller('HomeCtrl', function($scope, Restangular, apiUrl) {
  $scope.searchUrl = apiUrl + 'search/';
  $scope.query = '';
  $scope.results = [];
  $scope.selectedFrames = [];

  $scope.convertTime = function(secs) {
    return new Date(1000 * secs);
  };

  $scope.doSearch = function() {
    console.log($scope.query);

    Restangular.oneUrl('search/' + $scope.query).get().then(function(res) {
      console.log(res);
      $scope.results = res;
      $scope.selectedFrames = new Array($scope.results.length);
      $scope.selectedFrames.fill(0);
    });
  };

  $scope.selectFrame = function(resInd, frameInd) {
    $scope.selectedFrames[resInd] = frameInd;
  };
});
