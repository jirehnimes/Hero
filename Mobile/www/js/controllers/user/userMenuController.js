angular.module('hero.userMenuController', [])

.controller('UserMenuCtrl', function($scope, $state, $ionicPlatform, Account) {
	
	$ionicPlatform.ready(function() {
		$scope.account = Account.getAccount();
		console.log($scope.account);
	});

	$scope.logout = function(){
		// $ionicHistory.clearHistory();
		$state.go('main');
		location.reload();
	}
});

