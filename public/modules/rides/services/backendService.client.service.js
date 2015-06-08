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
    },

    getUserRides: function (userId) {
      return $http.get('/rides/user/' + userId);
    },

    getBookingsByUser: function (userId) {
      return $http.get('/bookings/user/' + userId);
    },

    deleteRide: function (rideId) {
      return $http.delete('/rides/' + rideId);
    },

    cancelBooking: function(bookingId) {
      return $http.delete('/bookings/' + bookingId);
    },

    getBookingsByRide: function(rideId) {
      return $http.get('/bookings/ride/' + rideId);
    }
  };
}]);