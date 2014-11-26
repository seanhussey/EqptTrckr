'use strict';

/**
 * @ngdoc service
 * @name eqpTrkrApp.authService
 * @description
 * # authService
 * Service in the eqpTrkrApp.
 */
angular.module('eqpTrkrApp')
  .service('authService', function ($state) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var firebaseUrl = 'https://noxeqmtrkr01.firebaseio.com/',
    	firebaseLogin = new Firebase(firebaseUrl)

    this.login = function(user, cb){
    	firebaseLogin.authWithPassword({
    		email: user.email,
    		password: user.password
    	}, function(err, authData) {
    		if(err){
    			switch(err.code){
    				case 'INVALID_EMAIL':
    				// handle an invalid email
    				case 'INVALID_PASSWORD':
    				// handle an invalid password
    				default:
    			}
    		} else if (authData){
    			// user authenticated with Firease
    			console.log('Logged In, User ID: ' + authData.uid)
    			cb(authData)
    		}
    	})
    }

    this.register = function(user, cb){
    	firebaseLogin.createUser({
    		email: user.email,
    		password: user.password
    	}, function(error){
    		if(error === null){
    			console.log('User created successfully')
    			firebaseLogin.authWithPassword({
    				email: user.email,
    				password: user.password
    			}, function(err, authData){
    				if(authData){
    					authData.name = user.name
    					authData.timestamp = new Date().toISOString()
    					firebaseLogin.child('user').child(authData.uid.replace('simplelogin:', '')).set(authData)
    					cb(authData)
    				} else {
    					console.log('uh oh, something went wrong...')
    				}
    			})
    		} else {
    			console.log('Error creating user:', error)
    		}
    	})
    }
  });