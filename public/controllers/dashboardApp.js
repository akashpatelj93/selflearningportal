var dashboardApp = angular.module('dashboardApp', ['jqwidgets',
  'ui.bootstrap', 'ngResource', 'ngRoute']);

dashboardApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'views/profileDashboard.html'
    })
    .when('/index', {
      templateUrl: 'views/index.html/'
    }).when('/discover', {
      templateUrl: 'views/discover.html/'
    })
    .when('/profile', {
      templateUrl: 'views/profileDashboard.html'
    })
    .when('/discover_update', {
      templateUrl: 'views/discover_update.html'
    })
    .when('/dashboard_update', {
      templateUrl: 'views/dashboard_update.html'
    })
    .when('/engage', {
      templateUrl: 'views/engage.html'
    })
    .when('/define', {
      templateUrl: 'views/define.html'
    })
    .when('/approach', {
      templateUrl: 'views/approach.html'
    })
    .when('/home', {
      templateUrl: 'views/landing.html'
    })
    .when('/clientCreation', {
      templateUrl: 'views/clientCreation.html'
    })
    .when('/fraOfferings', {
      templateUrl: 'views/fraOfferings.html'
    })
    .when('/showcase', {
      templateUrl: 'views/showcase.html'
    })
    .when('/readiness', {
      templateUrl: 'views/readiness.html'
    })
    .when('/login', {
      templateUrl: 'views/login.html'
    })
    .when('/engage_update', {
      templateUrl: 'views/engage_update1.html'
    })
    .when('/admin', {
      templateUrl: 'views/systemAdmin.html'
    }).when('/engage2', {
      templateUrl: 'views/update_test.html'
    }).when('/summaryTest', {
      templateUrl: 'views/testpage.html'
    }).when('/sanitize', {
      templateUrl: 'public/controllers/test.html'
    }).when('/raing', {
      templateUrl: 'views/rating.html'

    });
  // $locationProvider.html5Mode(true);



}); 