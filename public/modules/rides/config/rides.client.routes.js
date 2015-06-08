'use strict';
angular.module('rides').config(['$stateProvider', function ($stateProvider) {
  $stateProvider
  .state('allRides', {
    url: '/rides',
    templateUrl: 'modules/rides/views/allrides.client.view.html',
    controller: 'allRidesCtrl'
  })
  .state('viewRide', {
    url: '/rides/:rideId',
    templateUrl: 'modules/rides/views/view-ride.client.view.html',
    controller: 'viewRideCtrl'
  })
  .state('viewBookings', {
    url: '/rides/:rideId/bookings',
    templateUrl: 'modules/rides/views/viewBookings.client.view.html',
    controller: 'ViewBookingsCtrl'
  });
}]);