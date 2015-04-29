'use strict';

app.factory('TwitterUserFactory', ['$rootScope', function($rootScope) {
	
	var users = {};
	var followersUrl = '/1.1/followers/list.json';
	var friendsUrl = '1.1/friends/list.json';

	users.getFollowers = function() {
		return $rootScope.twitterOAuthResult.get(followersUrl);
	};

	users.getFriends = function() {
		return $rootScope.twitterOAuthResult.get(friendsUrl);
	};

	// this is for current user -- can be moved to a profile controller or current user controller if there is a need
	users.getMe = function() {
		return $rootScope.twitterOAuthResult.me();
	}

	return users;

}]);