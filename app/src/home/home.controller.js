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
hackApp.controller('HomeCtrl', function($scope) {
  $scope.data = [{'name': 'A'}, {'name': 'B'}, {'name': 'C'}, {'name': 'D'}];

  $scope.select = function(item) {
    console.log(item);
  };
});
