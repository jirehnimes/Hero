angular.module('app.mainController', [])

.controller('MainCtrl', function($scope, $state) {
	$scope.loginData = {
		username: '',
		password: ''
	};
	$scope.cats = [
	{ name: 'cat 1', color: 'red' },
	{ name: 'cat 2', color: 'blue' },
	{ name: 'cat 3', color: 'green' }
	];
	$scope.doLogin = function(){
		// console.log($scope.loginData);
		if($scope.loginData.username == 'jjnimes@gmail.com'){
			$state.go('home');
		}
	}
});

