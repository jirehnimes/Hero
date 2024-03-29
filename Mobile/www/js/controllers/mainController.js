angular.module('hero.mainController', [])

.controller('MainCtrl', function($scope, $state, Login, Account, $ionicPopup, $ionicPlatform, $cordovaSms) {
	$scope.loginData = {
		username: '',
		password: ''
	};
	$scope.doLogin = function(){
		var login = Login.login($scope.loginData.username,$scope.loginData.password).then(
			function(success){
				// console.log(success[0]);
				if (success[0].hero_id == 0) {
					$state.go('user.main');
					Account.setAccount(success[0]);
					// console.log('going 2 user type');
				} else if (success[0].hero_id != 0) {
					$state.go('hero.main');
					Account.setAccount(success[0]);
					// console.log('going 2 hero type');
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
			$cordovaSms
			.send('09068570712', 'red alert/14.699756/121.033542/1')
			.then(function() {
				$ionicPopup.alert({
					title: 'Emergency message is sent.'
				});
			}, function(error) {
			// An error occurred
			});
			$cordovaSms
			.send('09154783123', 'Pam is in trouble at location 14.699756,121.033542. Authorities have been contacted.')
			.then(function() {
				$ionicPopup.alert({
					title: 'Emergency message is sent by Pam.'
				});
			}, function(error) {
			// An error occurred
			});
		};

		shake.startWatch(onShake, 30 /*, onError */);

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

