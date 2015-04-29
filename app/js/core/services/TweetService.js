'use strict';

app.factory('TweetFactory', ['$scope','$rootScope', function($scope, $rootScope) {
	return {
		$scope.getTweets = function() {
      var url = "/1.1/statuses/home_timeline.json";
      $rootScope.me.get(url).done(function(response) {
      	console.log(response);
      })
		}
	}
}])