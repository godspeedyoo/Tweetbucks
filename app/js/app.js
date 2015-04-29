var app = angular.module('app', [
		'ui.router', 
		'ui.bootstrap',
		'ngCookies'
	]);

app.run(function($location, $rootScope) {
	$rootScope.go = function(url) {
		$location.url(url);
	}
})