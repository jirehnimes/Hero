angular.module('hero.mainController', [])

.controller('MainCtrl', function($scope, $state, Login, Account) {
	$scope.loginData = {
		username: '',
		password: ''
	};
	$scope.doLogin = function(){
		var login = Login.login($scope.loginData.username,$scope.loginData.password).then(
			function(success){
				console.log(success[0]);
				// $state.reload();
				if (success[0].hero_id == 0) {
					$state.go('user.main');
					// location.reload();
					Account.setAccount(success[0]);
					console.log('going 2 user type');
				} else if (success[0].hero_id == 1) {
					Account.setAccount(success[0]);
					$state.go('hero.main');
					console.log('going 2 hero type');
				};
			},function(fail){
				console.log('Invalid Login');
			}
		);
	}
});

