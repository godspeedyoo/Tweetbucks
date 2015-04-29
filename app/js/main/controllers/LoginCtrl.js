app.controller('LoginCtrl', ['$rootScope','$scope', '$state', function($rootScope, $scope, $state) {

	$scope.authenticate = function(Oauth) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak')
		OAuth.popup('twitter').done(function(result) {
	    $rootScope.authResult = result;
	    $rootScope.getTweets();
	    // store user data - abstract elsewhere for profile ctrl
	    result.me().done(function(data) {
	    	$rootScope.me = data;
	    	$rootScope.user_id = data.id;
				})

	    // attempt to refresh page with updated login/profile data
	    $state.reload();
	    $state.go('app.home', {reload: true});

		}).fail(function(error) {
			alert(error.message);
		})
	

	}		
}]);
