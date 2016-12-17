'use strict';

/**
 * Created by Drapegnik on 24.10.16.
 */

/**
 * @ngdoc controller
 * @name hackApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the hackApp for users page
 */
hackApp.controller('UserCtrl', ['$scope', 'UserService', function($scope, UserService) {
  UserService.getList().then(function(users) {
    $scope.users = users;
  });
}]);
