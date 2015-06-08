'use strict';
angular.module('rides').controller('ViewBookingsCtrl', ['$scope', '$stateParams', 'backendService', function ($scope, $stateParams, backendService) {
  console.log($stateParams);
  backendService.getBookingsByRide($stateParams.rideId).success(function (bookings) {
    console.log(bookings);
    $scope.bookings = bookings;
  });
}]);