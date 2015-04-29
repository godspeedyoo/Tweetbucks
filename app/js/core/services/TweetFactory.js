'use strict';

app.factory('TweetFactory', ['$rootScope', function($rootScope) {

	var tweets = {};
	var url = "https://api.twitter.com/1.1/statuses/user_timeline.json";

	tweets.getTweets = function() {
		$rootScope.twitterOAuthResult.get(url).success(function(response) {
			$rootScope.tweets = response;
		})
	};

	tweets.postTweet = function(text) {
		$rootScope.twitterOAuthResult.post('/1.1/statuses/update.json', {
	  	data: {
    		status: text
			}
		}).success(function(response) {
			alert("Tweet Sent");
		})
	}

	return tweets;
	
}])