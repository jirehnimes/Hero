angular.module('hero.accountService',[])

.factory("Account",function(){

	var accountDet = {};

	return{
		setAccount:function(account){
		    accountDet = account;
		},
		getAccount:function(){
			return accountDet;
		}
	}
})