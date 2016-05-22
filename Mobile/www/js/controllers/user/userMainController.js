angular.module('hero.userMainController', [])

.controller('UserMainCtrl', function($scope, $state, $ionicPlatform, $ionicLoading, 
$ionicPopup, $compile, Stations, Heroes) {

    // $scope.stations = {};

    // Stations.stations().then(function(result){
    //     console.log(JSON.stringify(result));
    //     $scope.return(result);
    // },function(fail){
    //     console.log(fail);
    // });

    // Heroes.heroes().then(function(result){
    //     console.log(JSON.stringify(result));
    //     $scope.heroes = result;
    // },function(fail){
    //     console.log(fail);
    // });

    console.log(JSON.stringify($scope.stations));

    $scope.$on( "$ionicView.enter", function( scopes, states ) {
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
            myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
        
        Stations.stations().then(function(result){
            console.log(JSON.stringify(result));
            console.log(JSON.stringify(result.stn.length));
            for(var i = 0; i < result.stn.length; i++){
                var myLatlng = new google.maps.LatLng(result.stn[i].latitude, result.stn[i].longitude);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    title: result.stn[i].name
                });
                marker.setMap(map);
            }

        },function(fail){
            console.log(fail);
        });

        function CenterControl(controlDiv, map) {

          // Set CSS for the control border.
          var controlUI = document.createElement('div');
          controlUI.style.backgroundColor = '#fff';
          controlUI.style.border = '2px solid #fff';
          controlUI.style.borderRadius = '3px';
          controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
          controlUI.style.cursor = 'pointer';
          controlUI.style.marginBottom = '22px';
          controlUI.style.textAlign = 'center';
          controlUI.title = 'asdasdasd';
          controlDiv.appendChild(controlUI);

          // Set CSS for the control interior.
          var controlText = document.createElement('div');
          controlText.style.color = 'rgb(25,25,25)';
          controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
          controlText.style.fontSize = '16px';
          controlText.style.lineHeight = '38px';
          controlText.style.paddingLeft = '5px';
          controlText.style.paddingRight = '5px';
          controlText.innerHTML = 'Center Map';
          controlUI.appendChild(controlText);

          // Setup the click event listeners: simply set the map to Chicago.
          controlUI.addEventListener('click', function() {
            map.setCenter(myLatlng);
          });

        }

        function RecalcControl(controlDiv, map) {

          // Set CSS for the control border.
          var controlUI = document.createElement('div');
          controlUI.style.backgroundColor = '#fff';
          controlUI.style.border = '2px solid #fff';
          controlUI.style.borderRadius = '3px';
          controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
          controlUI.style.cursor = 'pointer';
          controlUI.style.marginBottom = '22px';
          controlUI.style.textAlign = 'center';
          controlUI.title = 'Click to recalculate location';
          controlDiv.appendChild(controlUI);

          // Set CSS for the control interior.
          var controlText = document.createElement('div');
          controlText.style.color = 'rgb(25,25,25)';
          controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
          controlText.style.fontSize = '16px';
          controlText.style.lineHeight = '38px';
          controlText.style.paddingLeft = '5px';
          controlText.style.paddingRight = '5px';
          controlText.innerHTML = 'Recalculate';
          controlUI.appendChild(controlText);

          // Setup the click event listeners: simply set the map to Chicago.
          controlUI.addEventListener('click', function() {
            navigator.geolocation.getCurrentPosition(function(pos) {
                myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    title: "My Location"
                });
            });
          });

        }

        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        var recalcControlDiv = document.createElement('div');
        var recalcControl = new RecalcControl(recalcControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);

        centerControlDiv.index = 2;
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(recalcControlDiv);

        $scope.map = map;

        google.maps.event.trigger( map, 'resize' ); 
    });

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

