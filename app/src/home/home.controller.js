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
hackApp.controller('HomeCtrl', function($scope, Restangular, apiUrl, $timeout) {
  $scope.searchUrl = apiUrl + 'search/';
  $scope.query = '';
  $scope.results = [];
  $scope.framesIndexs = [];

  $scope.convertTime = function(secs) {
    return new Date(1000 * secs);
  };

  $scope.doSearch = function() {
    console.log($scope.query);

    Restangular.oneUrl('search/' + $scope.query).get().then(function(res) {
      console.log(res);
      $scope.results = res;
      $scope.framesIndexs = new Array($scope.results.length);
      $scope.framesIndexs.fill(0);
      $scope.play();
    });
  };

  $scope.next = function() {
    for (var i = 0; i < $scope.results.length; i++) {
      var frames = $scope.results[i].frames;
      var total = frames.length;
      if (total > 0) {
        $scope.framesIndexs[i] = ($scope.framesIndexs[i] === total - 1) ? 0 : $scope.framesIndexs[i] + 1;
      }
    }
  };

  $scope.play = function() {
    $timeout(function() {
      $scope.next();
      $scope.play();
    }, 3000);
  };
});
