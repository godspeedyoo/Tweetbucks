'use strict';

app.factory('TwitterUserFactory', ['$rootScope', '$scope', function($rootScope, $scope) {
	
	var users = {};
	var url = '/1.1/followers/list.json'

	users.getFollowers = function() {
		$rootScope.twitterOAuthResult.get(url).success(function(response) {
			$scope.followers = response.users;
		});
	};

	return users;


}])