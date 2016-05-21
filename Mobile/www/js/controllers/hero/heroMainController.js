angular.module('hero.heroMainController', [])

.controller('HeroMainCtrl', function($scope, $state, $ionicPlatform, $cordovaSms, Account,
	GetHero, GetAbilities) {

	$ionicPlatform.ready(function(){
		$scope.account = Account.getAccount();
	});

	GetHero.hero($scope.account.id).then(function(result){
		console.log(JSON.stringify(result));
		$scope.hero = result;
		$scope.hero_id = result.hero.id;
		console.log(result.gender);
		if( result.gender == 'male' ){
			$scope.avatarimg = '/img/hero/heromale.png';
		}else if( result.gender == 'female' ){
			$scope.avatarimg = '/img/hero/herofemale.png';
		}
		GetAbilities.abilities($scope.hero_id).then(function(result){
	      	console.log(JSON.stringify(result));
	      	$scope.abilities = result.ability;
	      	console.log(JSON.stringify($scope.abilities));
	    },function(fail){
	      	console.log(fail);
	    });
    },function(fail){
      	console.log(fail);
    });

	$scope.disAvatar = false;
	$scope.disAbilities = true;
	$scope.disBadges = true;

	$scope.showAvatar = function(){
		$scope.disAvatar = false;
		$scope.disAbilities = true;
		$scope.disBadges = true;
	}

	$scope.showAbilities = function(){
		$scope.disAvatar = true;
		$scope.disAbilities = false;
		$scope.disBadges = true;
	}

	$scope.showBadges = function(){
		$scope.disAvatar = true;
		$scope.disAbilities = true;
		$scope.disBadges = false;
	}

});

