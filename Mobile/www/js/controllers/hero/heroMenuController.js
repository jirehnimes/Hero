angular.module('hero.heroMenuController', [])

.controller('HeroMenuCtrl', function($scope, $state) {
	$scope.logout = function(){
		// $ionicHistory.clearHistory();
		$state.go('main');
		location.reload();
	}
});

