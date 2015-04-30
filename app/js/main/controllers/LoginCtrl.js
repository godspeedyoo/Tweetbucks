app.controller('LoginCtrl', [
	'$rootScope',
	'$scope', 
	'$state', 
	'TweetFactory',
	'TwitterUserFactory',
	'PaypalFactory',
	'LoginService',
	'$cookies', 
function(
		$rootScope, 
		$scope, 
		$state, 
		TweetFactory, 
		TwitterUserFactory, 
		PaypalFactory,
		LoginService,
		$cookies) {

	// ********************* NOTES *********************
	// instead of directly applying event services to $rootScope,
	// consider using 'somethingEventService' when extending multiple listeners 
	// so as not to clutter the $rootScope events. Example:
	// 	app.service("newEventService", function($rootScope) {
	// 			this.broadcast = function() { $rootScope.$broadcast("event")}
	// 			this.listen = function(callback) {$rootScope.$on("event", callback)}
	// })

	$scope.loggedIn = function() { 
		return $scope.authResult != null;
	}

	$scope.authenticate = function(provider) {
		// OAuth handler via popup
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak');
		OAuth.popup(provider, {cache: true}).done(function(response) {
    	LoginService.updateOAuthResult(response);
  		TweetFactory.getTweets();
    	console.log("OAuth initialized and complete.")
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
	  
	
	

