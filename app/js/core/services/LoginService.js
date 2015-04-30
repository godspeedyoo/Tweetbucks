'use strict';

app.factory('LoginService', ['$rootScope', function($rootScope) {

	var login = {}
	var thisBind = this;
	login.twitterOAuthResult = {};
	login.currentUser = {};

	login.updateOAuthResult = function(result) {
		this.twitterOAuthResult = result;
		this.twitterOAuthResult.me().then(function(user) {
			// Reference the service itself or bind 'this' in callback
			thisBind.currentUser = user;
		})
		$rootScope.$broadcast("loginUpdated");
	}

	return login;

}]);