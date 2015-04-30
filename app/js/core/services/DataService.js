app.factory('DataService', ['$rootScope', function($rootScope) {

	var data = {};
	data.twitterOAuthResult = {};
	data.tweets = {};
	data.currentUser = {};

	data.updateOAuthResult = function(result) {
		this.twitterOAuthResult = result;
		$rootScope.$broadcast("loginUpdated");
	}

	data.updateTweets = function(tweets) {
		this.tweets = tweets;
		$rootScope.$broadcast("tweetsUpdated");
		alert("tweets updated");
	}

	data.setCurrentUser = function(user) {
		this.currentUser = user;
	}

	return data;

}]);
