app.controller('HomeCtrl', [
	'$scope', 
	'$rootScope', 
	'$state', 
	'TweetFactory', 
	'LoginService',
	function(
		$scope, 
		$rootScope, 
		$state, 
		TweetFactory,
		LoginService) {

	$scope.postTweet = function(text) {
		TweetFactory.postTweet(text);
	};

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