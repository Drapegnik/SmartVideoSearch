'use strict';

/**
 * Created by Drapegnik on 19.10.16.
 */
hackApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('base', {
      url: '',
      templateUrl: 'src/base/base.view.html',
      controller: 'BaseCtrl',
      abstract: true
    })
    .state('base.home', {
      url: '/',
      templateUrl: 'src/home/home.view.html',
      controller: 'HomeCtrl'
    })
    .state('base.about', {
      url: '/about',
      templateUrl: 'src/views/about.view.html',
      controller: 'EmptyCtrl'
    })
    .state('base.search', {
      url: '/search',
      templateUrl: 'src/search/search.view.html',
      controller: 'SearchCtrl'
    });

  $urlRouterProvider.otherwise('/');
}]);
