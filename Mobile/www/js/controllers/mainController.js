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
			shake.stopWatch();
		};

		shake.startWatch(onShake, 40 /*, onError */);

		$scope.data = {
		speechText: ''
		};
		$scope.recognizedText = '';

		$scope.speakText = function() {
		TTS.speak({
		       text: $scope.data.speechText,
		       locale: 'en-GB',
		       rate: 1.5
		   }, function () {
		       // Do Something after success
		   }, function (reason) {
		       // Handle the error case
		   });
		};

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

