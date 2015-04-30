app.controller('LoginCtrl', [
	'$rootScope',
	'$scope', 
	'$state', 
	'TweetFactory',
	'TwitterUserFactory',
	'PaypalFactory',
	'DataService',
	'$cookies', 
function(
		$rootScope, 
		$scope, 
		$state, 
		TweetFactory, 
		TwitterUserFactory, 
		PaypalFactory,
		DataService,
		$cookies) {

	$scope.twitter_authorized = false;
	$scope.paypal_authorized = false;

	$scope.$on('valuesUpdated',function() { alert("Updated") });

	$scope.authenticate = function(provider) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak');

		OAuth.popup(provider, {cache: true}).done(function(response) {
    	$rootScope.twitterOAuthResult = response;

    	DataService.updateOAuthResult(response);
    });
	};


}]);
	    	// Load all necessary data upon login and serve through app - need a strategy to accomodate live update or stream API
	    	// TweetFactory.getTweets()
	    	// 	.success(function(response) { 
	    	// 		$rootScope.tweets = response;
	    	// 	});
	    	
	    	// TwitterUserFactory.getFollowers()
	    	// 	.success(function(response) { 
	    	// 		$rootScope.followers = response.users;
	    	// 	});

	    	// TwitterUserFactory.getFriends()
	    	// 	.success(function(response) { 
	    	// 		$rootScope.friends = response.users;
	    	// 	});
	    	
	    	// TwitterUserFactory.getMe()
	    	// 	.then(function(response) { 
	    	// 		$rootScope.me = response; 
	    	// 		alert('User data loaded.');
	    	// 		$state.go('app.home'); 
	    	// 	});
	    
	    
	    // if (provider === 'paypal') { 
	    // 	alert('Paypal coming soon');
	    // }
	  
	
	

