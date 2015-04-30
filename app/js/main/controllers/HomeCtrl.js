app.controller('HomeCtrl', [
	'$scope', 
	'$rootScope', 
	'$state', 
	'TweetFactory', 
	'LoginService',
	'DataService', 
	function(
		$scope, 
		$rootScope, 
		$state, 
		TweetFactory,
		LoginService, 
		DataService) {


	$scope.postTweet = function(text) {
		TweetFactory.postTweet(text);
	};

	// initialie data upon load
	$scope.tweets = TweetFactory.tweets;
	$scope.me = LoginService.currentUser;
	// listen for tweets data update
	$rootScope.$on('tweetsUpdated', function() {
		$scope.tweets = TweetFactory.tweets;
	})

}]);