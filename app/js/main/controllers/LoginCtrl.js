app.controller('LoginCtrl', [
	'$rootScope',
	'$scope', 
	'$state', 
	'TweetFactory',
	'TwitterUserFactory',
	'$cookies', 
function(
		$rootScope, 
		$scope, 
		$state, 
		TweetFactory, 
		TwitterUserFactory, 
		$cookies) {

	$scope.twitter_authorized = false;
	$scope.paypal_authorized = false;


	$scope.authenticate = function(provider) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak')

		OAuth.popup(provider, {cache: true}).done(function(response) {
	    
	    if (provider === 'twitter') { 
	    	$rootScope.twitterOAuthResult = response;
	    	// $cookies.twitter_token = response.oauth_token; // enable storing cookies once app.run is configured to check login
	    	$scope.twitterAuthorized = true;

	    	// Load all necessary data upon login and serve through app - need a strategy to accomodate live update or stream API
	    	TweetFactory.getTweets()
	    		.success(function(response) { 
	    			$rootScope.tweets = response;
	    		});
	    	
	    	TwitterUserFactory.getFollowers()
	    		.success(function(response) { 
	    			$rootScope.followers = response.users;
	    		});

	    	TwitterUserFactory.getFriends()
	    		.success(function(response) { 
	    			$rootScope.friends = response.users;
	    		});
	    	
	    	TwitterUserFactory.getMe()
	    		.then(function(response) { 
	    			$rootScope.me = response; 
	    			alert('User data loaded.');
	    			$state.go('app.home'); 
	    		});
	    };
	    
	    if (provider === 'paypal') { 
	    	debugger;
	    	$rootScope.paypalOAuthResult = response 
	    };
		}).fail(function(error) {
				console.log(error.message);
		});
	}

	$scope.logout = function() {
	};

}]);
