'use strict';

/**
 * @ngdoc service
 * @name eqpTrkrApp.firebaseService
 * @description
 * # firebaseService
 * Service in the eqpTrkrApp.
 */
angular.module('eqpTrkrApp')
	.service('firebaseService', function ($firebase) {
		var firebaseUrl = 'https://noxeqmtrkr01.firebaseio.com/'

		this.getUser = function(userId){
			return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject()
		}
		this.getThings = function(userId){
			return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/things')).$asArray()
		}
	});
