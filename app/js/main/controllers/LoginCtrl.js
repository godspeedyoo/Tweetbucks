app.controller('LoginCtrl', ['$rootScope',
															'$scope', 
															'$state', 
															'TweetFactory', 
	function($rootScope, $scope, $state, TweetFactory) {

	$scope.authenticate = function(provider) {
		OAuth.initialize('ZEezHY42tLMdO9i2rKNBAgAxdak')

		OAuth.popup(provider).done(function(response) {
	    if (provider === 'twitter') { $rootScope.twitterOAuthResult = response };
	    if (provider === 'paypal') { $rootScope.paypalOAuthResult = response };

	    // Retrieve user's latest tweet data to populate home feed
	    TweetFactory.getTweets();

	   //  // store user data - abstract elsewhere for profile ctrl
	   //  response.me().done(function(data) {
	   //  	$rootScope.me = data;
	   //  	$rootScope.user_id = data.id;
				// })

	    // attempt to refresh page with updated login/profile data
	    

		}).fail(function(error) {
				console.log(error.message);
		});
	}

}]);
