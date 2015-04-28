app.controller('LoginCtrl', ['$rootScope','$scope', function($rootScope, $scope) {

	$scope.authenticate = function(Oauth) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak')
		OAuth.popup('twitter').done(function(result) {
	    console.log(result);
		    // do some stuff with result
		}).fail(function(error) {
			console.log(error.message);
		})
	

	}		
}]);
