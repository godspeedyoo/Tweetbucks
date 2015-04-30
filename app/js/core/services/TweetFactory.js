'use strict';

app.factory('TweetFactory', ['$rootScope', 'LoginService',
	function($rootScope, LoginService) {

	var tweets = {};
	tweets.tweets = {};
	var thisBind = this;
	var postUrl = '/1.1/statuses/update.json';
	var getUrl = '/1.1/statuses/user_timeline.json';

	tweets.getTweets = function() {
		LoginService.twitterOAuthResult.get(getUrl)
		.success(function(tweetData) {
			tweets.tweets = tweetData;
			$rootScope.$broadcast('tweetsUpdated');
			debugger;
		})
	};

	tweets.postTweet = function(text) {
		LoginService.twitterOAuthResult.post(postUrl, {
	  	data: {
    		status: text
			}
		}).success(function(response) {
			alert("Tweet Sent");
		})
	}

	return tweets;
	
}])