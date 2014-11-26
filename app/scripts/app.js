'use strict';

/**
 * @ngdoc overview
 * @name eqpTrkrApp
 * @description
 * # eqpTrkrApp
 *
 * Main module of the application.
 */
angular
  .module('eqpTrkrApp', ['firebase', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
  	$urlRouterProvider.otherwise('/login')

  	$stateProvider
  		.state('login',{
  			url: '/login',
  			templateUrl: 'views/login.html',
  			controller: 'LoginCtrl'
  		})
  		.state('dashboard',{
  			url: '/dashbord/:userId',
  			templateUrl: 'views/dashboard.html',
  			controller: 'DashboardCtrl',
  			resolve: {
  				userReference: function(firebaseService, $stateParams){
  					return firebaseService.getUser($stateParams.userId)
  				},
  				thingsReference: function(firebaseService, $stateParams){
  					return firebaseService.getThings($stateParams.userId)
  				}
  			}
  		})
      .state('players',{
        url: '/players/:userId',
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl',
        resolve: {
          userReference: function(firebaseService, $stateParams){
            return firebaseService.getUser($stateParams.userId)
          },
          thingsReference: function(firebaseService, $stateParams){
            return firebaseService.getThings($stateParams.userId)
          }
        }
      })
      .state('equiptment',{
        url: '/equiptment/:userId',
        templateUrl: 'views/equiptment.html',
        controller: 'EquiptmentCtrl',
        resolve: {
          userReference: function(firebaseService, $stateParams){
            return firebaseService.getUser($stateParams.userId)
          },
          thingsReference: function(firebaseService, $stateParams){
            return firebaseService.getThings($stateParams.userId)
          }
        }
      })
      .state('contacts',{
        url: '/contacts/:userId',
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        resolve: {
          userReference: function(firebaseService, $stateParams){
            return firebaseService.getUser($stateParams.userId)
          },
          thingsReference: function(firebaseService, $stateParams){
            return firebaseService.getThings($stateParams.userId)
          }
        }
      })
  })