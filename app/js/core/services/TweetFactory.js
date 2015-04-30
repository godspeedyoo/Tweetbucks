'use strict';

app.factory('TweetFactory', ['$rootScope', function($rootScope) {

	var tweets = {};
	var postUrl = '/1.1/statuses/update.json';
	var getUrl = '/1.1/statuses/user_timeline.json';

	tweets.getTweets = function() {
		return $rootScope.twitterOAuthResult.get(getUrl);
	};

	tweets.postTweet = function(text) {
		$rootScope.twitterOAuthResult.post(postUrl, {
	  	data: {
    		status: text
			}
		}).success(function(response) {
			alert("Tweet Sent");
		})
	}

	return tweets;
	
}])