angular.module('hero.userMenuController', [])

.controller('UserMenuCtrl', function($scope, $state) {
	$scope.logout = function(){
		// $ionicHistory.clearHistory();
		$state.go('main');
		location.reload();
	}
});

