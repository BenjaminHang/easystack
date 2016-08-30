

var easy = angular.module('easy',[]);

easy.config(function($interpolateProvider) { $interpolateProvider.startSymbol('|['); $interpolateProvider.endSymbol(']|'); });


easy.controller('registerCtrl',['$scope','$http','$rootScope','registerData',function($scope,$http,$rootScope,registerData){
	
	$scope.formSubmit = function(valid){
		if(valid){
			
			registerData.setUser($scope);
			}
		}
	$scope.subbtn={
		hint: "",
		}
}]);



easy.directive("customAffirm", function() {
    return {
		require: 'ngModel',
        restrict: 'AE',
		scope: {
			valuepair:'=customAffirm',
			},
		link: function(scope,ele,attr,con){
			con.$validators.customAffirm = function(){
				return scope.valuepair.affirm.$viewValue == scope.valuepair.password.$viewValue;
				}
			scope.$watch('valuepair.password.$viewValue',function(){
				con.$validate();
				})
			}
    }
});


easy.factory('registerData',['$http',function($http){
	var registerData = {};
	registerData.setUser = function($scope){
		
		$http({
			url: '/submit/',
			method: 'POST',
			params:{
				username: [$scope.angForm.username.$viewValue],//[$scope.username.value],
				email: [$scope.angForm.email.$viewValue],//[$scope.username.value],
				password: [$scope.angForm.password.$viewValue],//[$scope.password.value]
			}
		}).success(function(data, status, headers, config){
			if(data == 'ok'){
				$scope.subbtn.hint = "注册成功";
			}else{
				if(data == 'usernamed'){
					$scope.subbtn.hint = "用户名已被注册";
				}else if(data == 'emailed'){
					$scope.subbtn.hint = "邮箱已被注册";
				}
			}
		}
		).error(function(){
			console.log("获取数据失败");
			});
	}
	return registerData;
}]);