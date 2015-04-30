app.factory('DataService', ['$rootScope', function($rootScope) {

	var data = {};
	data.twitterOAuthResult = {};
	data.tweets = {};

	data.updateOAuthResult = function(result) {
		this.twitterOAuthResult = result;
		$rootScope.$broadcast("loginUpdated");
	}

	data.updateTweets = function(tweets) {
		this.tweets = tweets;
		$rootScope.$broadcast("tweetsUpdated");
	}

	return data;

}]);
