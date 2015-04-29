'use strict';

app.factory('TwitterUserFactory', ['$rootScope', '$scope', function($rootScope, $scope) {
	
	var users = {};
	var followersUrl = '/1.1/followers/list.json';
	var friendsUrl = '1.1/friends/list.json';

	users.getFollowers = function() {
		$rootScope.twitterOAuthResult.get(followersUrl).success(function(response) {
			$scope.followers = response.users;
		});
	};

	users.getFriends = function() {
		$rootScope.twitterOAuthResult.get(friendsUrl).success(function(response) {
			$scope.friends = response.users;
		});
	};

	return users;

}]);