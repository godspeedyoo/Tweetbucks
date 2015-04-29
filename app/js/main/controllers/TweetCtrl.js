app.controller('TweetCtrl', ['$scope','TweetFactory','$rootScope', function($scope, TweetFactory, $rootScope) {

	$rootScope.getTweets = function() {
		var url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
		$rootScope.authResult.get(url).success(function(response) {
			console.log(response);
		})
	};

}]);