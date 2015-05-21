'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
    $scope.myInterval = 8000; 
    $scope.slides = [
      {
        image: 'http://res.cloudinary.com/andela/image/upload/v1430311270/carousel5_adruh8.jpg',
        caption: 'Donate and make a dream come true'
      },
      {
        image: 'http://res.cloudinary.com/andela/image/upload/v1430311270/carousel5_adruh8.jpg',
        caption: 'Donate and make a dream come true'
      },
      {
        image: 'http://res.cloudinary.com/andela/image/upload/v1430311270/carousel5_adruh8.jpg',
        caption: 'Donate and make a dream come true'
      }
    ];
	}
]);