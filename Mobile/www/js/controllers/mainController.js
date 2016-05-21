angular.module('app.mainController', [])

.controller('MainCtrl', function($scope, $state) {
	$scope.loginData = {
		username: '',
		password: ''
	};
	$scope.doLogin = function(){
		$state.go('home');
	}
});

