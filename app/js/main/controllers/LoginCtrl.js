app.controller('LoginCtrl', ['$rootScope','$scope', '$state', 'TweetFactory', function($rootScope, $scope, $state, TweetFactory) {

	$scope.authenticate = function(Oauth) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak')
		OAuth.popup('twitter').done(function(response) {
	    $rootScope.twitterOAuthResult = response;

	    // Retrieve user's latest tweet data to populate home feed
	    TweetFactory.getTweets();

	    // store user data - abstract elsewhere for profile ctrl
	    response.me().done(function(data) {
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
