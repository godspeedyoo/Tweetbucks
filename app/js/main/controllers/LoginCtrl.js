app.controller('LoginCtrl', [
	'$rootScope',
	'$scope', 
	'$state', 
	'TweetFactory',
	'$cookies', 
function($rootScope, $scope, $state, TweetFactory, $cookies) {

	$scope.twitter_authorized = false;
	$scope.paypal_authorized = false;


	$scope.authenticate = function(provider) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak')

		OAuth.popup(provider).done(function(response) {
	    
	    if (provider === 'twitter') { 
	    	$rootScope.twitterOAuthResult = response;
	    	$cookies.twitter_token = response.oauth_token;
	    	$scope.twitterAuthorized = true;
	    	TweetFactory.getTweets();
	    };
	    
	    if (provider === 'paypal') { 
	    	$rootScope.paypalOAuthResult = response 
	    	$cookies.paypal_token = response.oauth_token;
	    	$scope.paypalAuthorized = true;
	    };

	    // Retrieve user's latest tweet data to populate home feed

		}).fail(function(error) {
				console.log(error.message);
		});
	}

	$scope.logout = function() {
		$cookies.twitter_token = null;
		$cookies.paypal_token = null;
		$scope.twitterAuthorized = false;
		$scope.paypalAuthorized = false;
	};

}]);
