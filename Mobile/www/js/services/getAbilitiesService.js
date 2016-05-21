angular.module('hero.getAbilitiesService',['hero.apihero'])

.factory("GetAbilities",function($q, GetAbilitiesAPI){

	function get_abilities(id){

	    var deferred = $q.defer();

  		GetAbilitiesAPI.getResource(id, deferred).get({},{},function(success){
  			deferred.resolve(success);
  		},function(fail){
  			deferred.reject("Api Error");
  		})
  		
  		return deferred.promise;
	}

	return{
		abilities:function(id){
		    return get_abilities(id);
		}
	}

})