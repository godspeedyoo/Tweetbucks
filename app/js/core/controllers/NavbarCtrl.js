app.controller('NavbarCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  $scope.items = ['Home', 'About', 'Contact'];

  $scope.logout = function() {
  	OAuth.clearCache();
  	$rootScope = null;
  	alert("You have logged out.");
  }
}]);
