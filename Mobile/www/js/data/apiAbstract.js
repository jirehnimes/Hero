//var server = "http://heroapi.com.local:4041/"; //server
var server = "http://10.99.0.63:4041/";

angular.module('hero.apiAbstract',['ngResource'])

.config(['$httpProvider', function ($httpProvider) {
  // Intercept POST requests, convert to standard form encoding

  $httpProvider.defaults.timeout = 5000;

  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    var key, result = [];

    if (typeof data === "string")
      return data;

    for (key in data) {
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return result.join("&");
  });

  console.log($httpProvider);
}])

.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}])

.factory('ServerRequest',function($ionicPopup,$cordovaNetwork,$rootScope,$q,$resource,$timeout){

  function getResource(url,callback_promise){
    return $resource(
      server + url , {},
      {
        save: {
          method:'POST',
          isArray: false,
          timeout: 10000,
          interceptor: {
              responseError: function (data) {
                  $rootScope.$broadcast('response:timeout')
                  return data;
              }
          },
          cancellable: true
        },
        get: {
          method:'GET',
          isArray: false,
          timeout: 10000,
          interceptor: {
              responseError: function (data) {
                  $rootScope.$broadcast('response:timeout')
                  return data;
              }
          },
        }
      }
    );
  }

  return {
    getResource: function (url,callback_promise) {
      return getResource(url,callback_promise);
    }
  };
})

.factory('ServerRequestV2',function( $cordovaNetwork,$q,$rootScope,$resource){
    function myResourcePost(url,params,callback){
      return $resource(
        server + url , params,
        {
          save: {
            method:'POST',
            isArray: true,
            timeout: 20000,
            interceptor: {
                responseError: function (data) {
                    if(data.status == 0){
                      console.log('responseError');
                      $rootScope.$broadcast('response:timeout');
                      callback('api_error');
                    }else{
                      $rootScope.$broadcast('response:invalid',data.data);
                    }

                    return data;
                }
            },
            cancellable: true,
          }
      });

    };

    function myResourceGet(url,params,callback){
      return $resource(
          server + url , params,
          {
            get: {
              method:'GET',
              isArray: false,
              timeout: 20000,
              interceptor: {
                  responseError: function (data) {
                    if(data.status == 0){
                      console.log('responseError');
                      $rootScope.$broadcast('response:timeout');
                      callback('api_error');
                    }else{
                      $rootScope.$broadcast('response:invalid',data.data);
                    }
                      return data;
                  }
              },
            }
          }
      );

    };

    function checkInternetConnection(callback){
      var status = true;
      if(window.cordova){ //make it false to test in browser
           console.log('device...');
           var tmp = true;
           if ($cordovaNetwork.isOffline()) { //$cordovaNetwork.isOffline() -> change to temp value for testing
             // Send message to UI informing no Connection
              $rootScope.$broadcast('response:noconnection')

              //return callback
              callback.reject('NoNetWork');

              //set checker to false
              status = false;

             }else{
               console.log('device...');
              //  has net connection
               status = true;
             }

      }else{
           console.log('browser...');
           status = true;
          //  return getResource(url,callback_promise);
      }

      return status;
    }

    return {
      getResource : function(url,method,params,data){
          var deferred = $q.defer();

          if(method == 'GET'){
              console.log('GET');

              if(checkInternetConnection(deferred)){
                  console.log("Has internet connection");

                  // {url-params},data--for post-data
                  var res = myResourceGet(url,params,function(){
                    // console.log(res);
                    res.$cancelRequest();
                    console.log('something went wrong');
                    deferred.reject('request_cancelled');
                  }).get(params,data,function(success){
                      // console.log(success);
                      deferred.resolve(success);
                  },function(fail){

                      console.log('fail api abstract');
                      console.log(fail);
                      deferred.reject(fail);
                  });
              }


                // return myResourceGet(url);
          }else if(method == 'POST'){
              console.log('POST');

              // var User = $resource('/user/:userId', {userId:'@id'});
              // var user = User.get({userId:123}, function() {
              //   user.abc = true;
              //   user.$save();
              // });

              if(checkInternetConnection(deferred)){
                  console.log("Has internet connection");

                  // {url-params},data--for post-data
                  var res = myResourcePost(url,params,function(){
                    // console.log(res);
                    res.$cancelRequest();
                    console.log('something went wrong');
                    deferred.reject('request_cancelled');
                  }).save(params,data,function(success){
                      // console.log(success);
                      deferred.resolve(success);
                  },function(fail){

                      console.log('fail api abstract');
                      console.log(fail);
                      deferred.reject(fail);
                  });



              }

              // return myResourcePost(url);
          }

          return deferred.promise;
      }

    }
});
