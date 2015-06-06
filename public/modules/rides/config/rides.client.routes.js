'use strict';
angular.module('rides').config(['$stateProvider', function ($stateProvider) {
  $stateProvider
  .state('allRides', {
    url: '/rides',
    templateUrl: 'modules/rides/views/allrides.client.view.html',
    controller: 'allRidesCtrl'
  });
}]);