angular.module('hero.mainController', [])

.controller('MainCtrl', function($scope, $state, Login, Account, $ionicPopup, $ionicPlatform, $cordovaSms) {
	$scope.loginData = {
		username: '',
		password: ''
	};
	$scope.doLogin = function(){
		var login = Login.login($scope.loginData.username,$scope.loginData.password).then(
			function(success){
				console.log(success[0]);
				if (success[0].hero_id == 0) {
					$state.go('user.main');
					Account.setAccount(success[0]);
					console.log('going 2 user type');
				} else if (success[0].hero_id == 1) {
					$state.go('hero.main');
					Account.setAccount(success[0]);
					console.log('going 2 hero type');
				};
			},function(fail){
				console.log('Invalid Login');
			}
		);
	}

	$ionicPlatform.ready(function(){

		$scope.sendSMS = function(){
			$cordovaSms
			.send('09068570712', 'SMS content was sent.')
			.then(function() {
				$ionicPopup.alert({
					title: 'SMS Sent.'
				});
			}, function(error) {
			// An error occurred
			});
		}

		var onShake = function () {
			$ionicPopup.alert({
				title: 'Shake Shake Shake'
			});
		};

		shake.startWatch(onShake, 60 /*, onError */);

		$scope.recognizedText = '';

		$scope.record = function() {
			var recognition = new SpeechRecognition();
			recognition.onresult = function(event) {
			    if (event.results.length > 0) {
			        $scope.recognizedText = event.results[0][0].transcript;
			        $scope.$apply()
			    }
			};
			recognition.start();
		};
		
	});
});

