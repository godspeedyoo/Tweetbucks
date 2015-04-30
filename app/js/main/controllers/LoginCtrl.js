app.controller('LoginCtrl', [
	'$scope', 
	'TweetFactory',
	'LoginService', 
function(
		$scope, 
		TweetFactory, 
		LoginService) {

	// ********************* NOTES *********************
	// instead of directly applying event services to $rootScope,
	// consider using 'somethingEventService' when extending multiple listeners 
	// so as not to clutter the $rootScope events. Example:
	// 	app.service("newEventService", function($rootScope) {
	// 			this.broadcast = function() { $rootScope.$broadcast("event")}
	// 			this.listen = function(callback) {$rootScope.$on("event", callback)}
	// })

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


