
angular.module('hero.apihero',['ngResource','hero.apiAbstract'])

// TO REMOVE
// .config(['$httpProvider', function ($httpProvider) {
//   // Intercept POST requests, convert to standard form encoding
//   $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//   $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
//     var key, result = [];
//
//     if (typeof data === "string")
//       return data;
//
//     for (key in data) {
//       if (data.hasOwnProperty(key))
//         result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
//     }
//     return result.join("&");
//   });
//
//
//
// }])

// TO REMOVE UNTIL HERE

// .factory("ApiLogin",function(ServerRequest){
//   return{
//     getResource : function(callback_promise){
//       // console.log('Apilogin-- ServerRequest');
//       return ServerRequest.getResource("login",callback_promise);
//     }
//   }
// })

.factory("ApiLogin",function(ServerRequestV2){
  return{
    getResource : function(method,params,data){
      return ServerRequestV2.getResource("user/login",method,params,data);
    }
  }
})

// Client

.factory("SendPreAlert",function(ServerRequestV2){
  return{
    getResource : function(method,params,data){
      return ServerRequestV2.getResource("prealert/send",method,params,data);
    }
  }
})

.factory("SendReceiveAttempted",function(ServerRequestV2){
  return{
    getResource : function(method,params,data){
      return ServerRequestV2.getResource("client/receive/attempted",method,params,data);
    }
  }
})

.factory("SendReceiveDelivered",function(ServerRequestV2){
  return{
    getResource : function(method,params,data){
      return ServerRequestV2.getResource("client/receive/delivered",method,params,data);
    }
  }
})

.factory("GetHeroAPI",function(ServerRequest){
  return{
    getResource : function(id,callback_promise){
      return ServerRequest.getResource("hero/" + id, callback_promise);
    }
  }
})

.factory("GetAbilitiesAPI",function(ServerRequest){
  return{
    getResource : function(id,callback_promise){
      return ServerRequest.getResource("abilities/" + id, callback_promise);
    }
  }
})

.factory("GetUser",function(ServerRequest){
  return{
    getResource : function(callback_promise){
      return ServerRequest.getResource("user",callback_promise);
    }
  }
})

.factory("GetStations",function(ServerRequest){
  return{
    getResource : function(callback_promise){
      return ServerRequest.getResource("stations",callback_promise);
    }
  }
})

.factory("GetHeroes",function(ServerRequest){
  return{
    getResource : function(callback_promise){
      return ServerRequest.getResource("heroes",callback_promise);
    }
  }
})

;
