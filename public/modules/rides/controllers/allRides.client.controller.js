'use strict';
angular.module('rides').controller('allRidesCtrl', ['$scope', 'backendService', function($scope, backendService){
  backendService.getRides().success(function (res) {
    $scope.rides = res;
  });
}]);