'use strict';
angular.module('rides').controller('UserRidesCtrl', ['$scope', 'backendService', 'Authentication', function($scope, backendService, Authentication){
  $scope.user = Authentication.user;

  var getUserRides = function () {
    backendService.getUserRides($scope.user._id).success(function (res) {
      console.log('rides created by user', res);
      $scope.myRides = res;
    });
  };
  getUserRides();

  var getUserBookings = function () {
    backendService.getBookingsByUser($scope.user._id).success(function (response) {
      console.log('rides i booked', response);
      $scope.myBookings = response;
    });
  };
  getUserBookings();

  $scope.deleteRide = function (index) {
    var response = confirm('Are you sure?');
    console.log($scope.myRides[index]);
    if(response === true) {
      $scope.selectedRide = $scope.myRides[index];
      backendService.deleteRide($scope.selectedRide._id).success(function (result) {
        console.log(result);
        alert('ride has been deleted');
        getUserRides();
      });
    }
  };

  $scope.cancelRide = function (index) {
    var selectedBooking = $scope.myBookings[index];
    var confirmation = confirm('sure?');
    if(confirmation === true) {
      backendService.cancelBooking(selectedBooking._id).success(function (idahun) {
        console.log(idahun);
        alert('ride has been cancelled');
        getUserBookings();
      });
    }
  };
}]);