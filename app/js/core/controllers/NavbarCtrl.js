app.controller('NavbarCtrl', ['$rootScope', '$scope', '$cookies', '$state',
 function($rootScope, $scope, $cookies, $state) {
  $scope.items = ['Home', 'About', 'Contact'];

  $scope.logout = function() {
  	OAuth.clearCache();
  	//
  	// $cookies.remove('oauthio_provider_twitter');
  	// alert("You have logged out.");
  	// $state.go('app.login');
  }
}]);
