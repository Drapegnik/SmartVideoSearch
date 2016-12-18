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
hackApp.controller('HomeCtrl', function($scope, Restangular, apiUrl, GoJs) {
  $scope.searchUrl = apiUrl + 'search/';
  $scope.query = '';
  $scope.results = [];

  var data = [
    [0, "first", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123341/speech-bubble_i0opc3.png"],
    [0.1, "first", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123341/seo-tag_dozyn8.png"],
    [0.6, "first", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123340/safe_sfdymy.png"],
    [0.4, "second", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123340/paper-plane_dapsat.png"],
    [0.3, "second", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123340/medal_m7igax.png"],
    [0.2, "second", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123340/magnifier-target_w3sbbx.png"],
    [0.7, "third", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123340/magic-wand_wt3pib.png"],
    [0.8, "third", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123340/light-bulb_ihauyr.png"],
    [0.5, "third", "http://res.cloudinary.com/dzsjwgjii/image/upload/v1481123340/light-bulb_ihauyr.png"]
  ];

  GoJs.draw('myDiagramDiv', 'infoBoxHolder', data);

  $scope.convertTime = function(secs) {
    return new Date(1000 * secs);
  };

  $scope.doSearch = function() {
    console.log($scope.query);

    Restangular.oneUrl('search/' + $scope.query).get().then(function(res) {
      console.log(res);
      $scope.results = res;
    });
  };

  $scope.draw = function() {
    for (var i = 0; i < $scope.results.length; i++) {
      GoJs.draw('diagram' + i, 'preview' + i, data);
    }
  };
});
