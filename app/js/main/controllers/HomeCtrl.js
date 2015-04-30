app.controller('HomeCtrl', [
	'$scope', 
	'$rootScope', 
	'$state', 
	'TweetFactory', 
	'LoginService',
	'$cookies',
	function(
		$scope, 
		$rootScope, 
		$state, 
		TweetFactory,
		LoginService,
		$cookies) {

	$scope.postTweet = function(text) {
		TweetFactory.postTweet(text);
	};

	// check for cached user and load user data if it exists (needs SSL)
	if ($cookies.oauthio_provider_twitter) { LoginService.getCachedUser() }


	// initialize data upon load
	$scope.tweets = TweetFactory.tweets;
	$scope.currentUser = LoginService.currentUser;
	
	// listen for tweets data update
	$rootScope.$on('tweetsUpdated', function() {
		$scope.tweets = TweetFactory.tweets;
	})
	// listen for login user update
	$rootScope.$on('loginUpdated', function() {
		$scope.currentUser = LoginService.currentUser;
	})

}]);