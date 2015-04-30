app.controller('NavbarCtrl', ['$rootScope', '$scope', function($scope) {
  $scope.items = ['Home', 'About', 'Contact'];

  $scope.logout = function() {
  	OAuth.clearCache();
  	alert("You have logged out.");
  }
}]);
