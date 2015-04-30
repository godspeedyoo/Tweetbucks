'use strict';

app.factory('LoginService', ['$rootScope', '$state', '$cookies', 
	function($rootScope, $state, $cookies) {

	var login = {}
	login.twitterOAuthResult = {};
	login.currentUser = {};

	login.updateOAuthResult = function(result) {
		this.twitterOAuthResult = result;
		this.twitterOAuthResult.me().then(function(user) {
			login.currentUser = user;
		});
	}

	login.getCachedUser = function() {
		console.log("attempting to retrieve user from cache");
		// creates an oauth request object
		var twitter = OAuth.create('twitter');

		// must use SSL here to get access via local cache - try this from heroku
		twitter.me().then(function(user) {
			login.currentUser = user;
			$rootScope.$broadcast("loginUpdated");
			alert("User successfully retrieved from cache.");
		})
	}

	return login;

}]);