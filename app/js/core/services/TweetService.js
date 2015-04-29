'use strict';

app.factory('TweetFactory', ['$http', function($http) {
	
  var url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
	var tweets = {};

	tweets.getTweets = function(user_id) {
		return $http.get(url + '?user_id=' +user_id);
	};

	return tweets;
	
}])