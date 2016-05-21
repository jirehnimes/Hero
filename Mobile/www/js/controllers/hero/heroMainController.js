angular.module('hero.heroMainController', [])

.controller('HeroMainCtrl', function($scope, $state, $ionicPlatform, $cordovaSms) {

	$ionicPlatform.ready(function(){

		$scope.sendSMS = function(){
			$cordovaSms
			.send('09068570712', 'SMS content was sent.', options)
			.then(function() {
			// Success! SMS was sent
			}, function(error) {
			// An error occurred
			});
		}
		
	});

});

