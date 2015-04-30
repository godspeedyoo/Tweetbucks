'use strict';

app.factory('LoginService', ['$rootScope', function($rootScope) {

	var login = {}
	login.twitterOAuthResult = {};
	login.currentUser = {};

	login.updateOAuthResult = function(result) {
		this.twitterOAuthResult = result;
		this.twitterOAuthResult.me().then(function(user) {
			login.currentUser = user;
			$rootScope.$broadcast("loginUpdated");
		})
	}

	return login;

}]);