'use strict';

app.factory('TweetFactory', ['$rootScope', function($rootScope) {

	var tweets = {};

	tweets.getTweets = function() {
		var url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
		$rootScope.OAuthResult.get(url).success(function(response) {
			$rootScope.tweets = response;
		})
	};

	return tweets;
	
}])