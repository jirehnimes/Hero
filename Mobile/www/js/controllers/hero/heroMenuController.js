angular.module('hero.heroMenuController', [])

.controller('HeroMenuCtrl', function($scope, $state, $ionicPlatform, Account) {

	$ionicPlatform.ready(function(){
		$scope.account = Account.getAccount();
	});

	$scope.logout = function(){
		// $ionicHistory.clearHistory();
		$state.go('main');
		location.reload();
	}
});

