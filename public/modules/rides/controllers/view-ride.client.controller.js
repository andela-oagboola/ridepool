'use strict';
angular.module('rides').controller('viewRideCtrl', ['$scope', 'Authentication', '$stateParams', 'backendService', function($scope, Authentication, $stateParams, backendService){

  var getRide = function () {
    backendService.getUniqueRide($stateParams.rideId).success(function (res) {
      $scope.ride = res[0];
    });
  };
  getRide();
  $scope.bookRide = function () {
    console.log('hjs');
    // var response = confirm('book ride?');
    // if (response === true) {
    //   $scope.booking = {
    //     ride: $scope.ride._id,
    //     booked_by: Authentication.user._id
    //   };
    //   backendService.bookRide($scope.booking).success(function (res) {
    //     alert('Ride has been booked, await confirmation');
    //     getRide();
    //   });
    // }
  };
}]);