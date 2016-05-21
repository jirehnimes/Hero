angular.module('hero.loginService',['hero.apihero'])

.factory("Login",function($q, ApiLogin){

	function login_process(username,password){
	    var resource;

	    console.log('login_process');

	    var deferred = $q.defer();

	    var data = {
			username: username,
			password: password
	    }

	    console.log(JSON.stringify(data));

	    //version 2
	    var login = ApiLogin.getResource('POST',{},data).then(
	    	function(success){
		        deferred.resolve(success);
		    },function(fail){
		    	console.log('api error');
		        deferred.reject('api error');
		    }
		);

	    return deferred.promise;

	}

	return{
		login:function(username,password){
		    return login_process(username,password);
		}
	}
})