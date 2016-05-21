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
	
    $scope.showPopup = function() {
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
    };
});

