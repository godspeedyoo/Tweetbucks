app.controller('TwitterUserCtrl', [
	'$scope', 
	'TwitterUserFactory', 

function($scope, TwitterUserFactory) {
// LoginCtrl is the actual controller using TwitterUserFactory and setting $scope variables
// abstract away for cleaner structure if separate control is needed


// 	$scope.getFollowers = function() {
// 		TwitterUserFactory.getFollowers().success(function(response) {
// 			$scope.followers = response.users;
// 		});
// 	};

// 	$scope.getFriends = function() {
// 		TwitterUserFactory.getFollowers().success(function(response) {
// 			$scope.friends = response.users;
// 		});
// 	};

// 	$scope.getMe = function() {
// 		TwitterUserFactory.getMe().success(function(response) {
// 			$scope.me = response;
// 		}).fail(function(response) {
// 			console.log(response);
// 		})
// 	}
}]);


