app.controller('LoginCtrl', ['$rootScope','$scope', '$state', function($rootScope, $scope, $state) {

	$scope.authenticate = function(Oauth) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak')
		OAuth.popup('twitter').done(function(result) {
	    $rootScope.authResult = result;
	    $state.go('app.home');
		}).fail(function(error) {
			alert(error.message);
		})
	

	}		
}]);
