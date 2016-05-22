angular.module('hero.getStationsService',['hero.apihero'])

.factory("Stations",function($q, GetStations){

	function get_stations(){

	    var deferred = $q.defer();

  		GetStations.getResource(deferred).get({},{},function(success){
  			deferred.resolve(success);
  		},function(fail){
  			deferred.reject("Api Error");
  		})
  		
  		return deferred.promise;
	}

	return{
		stations:function(){
		    return get_stations();
		}
	}

})