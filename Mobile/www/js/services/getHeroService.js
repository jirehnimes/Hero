angular.module('hero.getHeroService',['hero.apihero'])

.factory("GetHero",function($q, GetHeroAPI){

	function get_hero(id){

	    var deferred = $q.defer();

  		GetHeroAPI.getResource(id, deferred).get({},{},function(success){
  			deferred.resolve(success);
  		},function(fail){
  			deferred.reject("Api Error");
  		})

  		return deferred.promise;
	}

	return{
		hero:function(id){
		    return get_hero(id);
		}
	}

})