'use strict';
angular.module('rides').factory('backendService', ['$http', function($http){
  return {
    getRides: function () {
      return $http.get('/rides');
    },

    getUniqueRide: function (rideId) {
      return $http.get('/rides/' + rideId);
    },

    bookRide: function (booking) {
      return $http.post('/bookings', booking);
    }
  };
}]);