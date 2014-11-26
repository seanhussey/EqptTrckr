'use strict';

/**
 * @ngdoc function
 * @name eqpTrkrApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the eqpTrkrApp
 */
angular.module('eqpTrkrApp')
	.controller('PlayersCtrl', function ($scope, playerService) {
		$scope.status = 'Create New Player'
		$scope.showNp = function(){
			if($scope.status === 'Roster'){
				$scope.status = 'Create New Player'
			} else {
				$scope.status = 'Roster'
			}
			$scope.np = !$scope.np
		}

		$scope.players = playerService.getPlayers()

		$scope.newPlayer = function(){

		}
		$scope.roster = function(){

		}

	});