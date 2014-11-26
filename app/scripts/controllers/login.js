'use strict';

/**
 * @ngdoc function
 * @name eqpTrkrApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eqpTrkrApp
 */
angular.module('eqpTrkrApp')
	.controller('LoginCtrl', function ($scope, authService, $state) {
		$scope.login = function(){
			return authService.login($scope.details, function(user){
				user.uid = user.uid.replace('simplelogin:', '')
				$scope.$apply(function(){
					$state.go('dashboard')
				})
			})
		}
		$scope.register = function(){
			return authService.register($scope.details, function(user){
				user.uid = user.uid.replace('simplelogin:', '')
				$scope.$apply(function(){
					$state.go('dashboard')
				})
			})
		}
		$scope.status = 'Register'
		$scope.showReg = function(){
			if($scope.status === 'Register'){
				$scope.status = 'Login'
			} else {
				$scope.status = 'Register'
			}
			$scope.reg = !$scope.reg
		}
	});
