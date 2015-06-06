'use strict';
angular.module('rides').factory('backendService', ['$http', function($http){
  return {
    getRides: function () {
      return $http.get('/rides');
    }
  };
}]);