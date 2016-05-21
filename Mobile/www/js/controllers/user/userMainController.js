angular.module('hero.userMainController', [])

.controller('UserMainCtrl', function($scope, $state, $ionicPlatform, $ionicLoading, 
$ionicPopup, $compile) {

    $scope.$on( "$ionicView.enter", function( scopes, states ) {
        google.maps.event.addDomListener(window, 'load', function() {
            var myLatlng = new google.maps.LatLng(14.651489, 121.049416);
     
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true,
            };
     
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
     
            navigator.geolocation.getCurrentPosition(function(pos) {
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    title: "My Location"
                });
            });
     
            $scope.map = map;
        });
    });
	
    /*$scope.showPopup = function() {
        $scope.data = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/user/reportBtn/major.html',
            title: '',
            subTitle: 'Choose an action.',
            scope: $scope,
            buttons: [
                {
                    text: '<b>Cancel</b>',
                    type: 'button-assertive',
                }
            ]
        });

        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
    };*/

    $scope.showRed = function() {
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/user/reportBtn/red.html',
            title: 'Choose an action.',
            scope: $scope,
            buttons: [
                {
                    text: '<b>Cancel</b>',
                    type: 'button-assertive',
                }
            ]
        });

        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
    };

    $scope.showOrange = function() {
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/user/reportBtn/orange.html',
            title: 'Choose an action.',
            scope: $scope,
            buttons: [
                {
                    text: '<b>Cancel</b>',
                    type: 'button-assertive',
                }
            ]
        });

        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
    };

    $scope.showYellow = function() {
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/user/reportBtn/yellow.html',
            title: 'Choose an action.',
            scope: $scope,
            buttons: [
                {
                    text: '<b>Cancel</b>',
                    type: 'button-assertive',
                }
            ]
        });

        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
    };


    //RED
    $scope.sendViolence = function(){
        console.log('violence');

    };

    $scope.sendOnLabor = function(){
        console.log('on labor');

    };

    $scope.sendRobbery = function(){
        console.log('robbery');

    };

    $scope.sendAccident = function(){
        console.log('accident');

    };

    $scope.sendMajorInjury = function(){
        console.log('major injury');

    };

    $scope.sendRape = function(){
        console.log('rape');

    };

    //ORANGE
    $scope.sendLost = function(){
        console.log('lost');

    };

    $scope.sendSick = function(){
        console.log('sick');

    };

    $scope.sendStranded = function(){
        console.log('stranded');

    };

    $scope.sendPervert = function(){
        console.log('pervert');

    };

    $scope.sendMinorInjury = function(){
        console.log('minor injury');

    };

    //YELLOW
    $scope.sendBurdened = function(){
        console.log('burdened');

    };

    $scope.sendConfused = function(){
        console.log('confused');

    };

    $scope.sendIrritated = function(){
        console.log('irritated');

    };

    $scope.sendAllergic = function(){
        console.log('allergic');

    };
});

