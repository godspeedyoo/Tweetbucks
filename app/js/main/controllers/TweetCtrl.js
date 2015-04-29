app.controller('TweetCtrl', ['$scope','TweetFactory', function($scope, TweetFactory) {

	$scope.postTweet = function(text) {
		TweetFactory.postTweet(text);
	};

}]);