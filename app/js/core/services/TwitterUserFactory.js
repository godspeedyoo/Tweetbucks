'use strict';

app.factory('TwitterUserFactory', ['$rootScope', function($rootScope) {
	
	var users = {};
	var url = '/1.1/followers/ids.json'

	users.getFollowers = function() {
		$rootScope.twitterOAuthResult.get(url).success(function(response) {
			debugger;
		});
	};

	return users;


}])