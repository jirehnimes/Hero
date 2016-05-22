angular.module('hero.getHeroesService',['hero.apihero'])

.factory("Heroes",function($q, GetHeroes){

	function get_heroes(){

	    var deferred = $q.defer();

  		GetHeroes.getResource(deferred).get({},{},function(success){
  			deferred.resolve(success);
  		},function(fail){
  			deferred.reject("Api Error");
  		})
  		
  		return deferred.promise;
	}

	return{
		heroes:function(){
		    return get_heroes();
		}
	}

})