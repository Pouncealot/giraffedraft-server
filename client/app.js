;(function (){
	"use strict";
	angular.module("gd", ['mm.foundation', 'ui.router','home'])

	.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
      $urlRouterProvider.otherwise('/');

        $stateProvider    
          .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: './controllers/home/home.html'
          })
          .state('signin', {
            url: '/signin',
            controller: 'AuthController',
            templateUrl: 'app/auth/signin'
          })
          .state('links', {
            url: '/links',
            controller: 'LinksController',
            templateUrl: 'app/links/links.html',
            resolve: {
              links: function(Links) {
                return Links.getAll();
              }
            }
          })
          .state('links.child', {
            url: '/child',
            template: '<h1>CHILD</h1>'
          })
          .state('shorten', {
            url: '/shorten',
            controller: 'ShortenController',
            templateUrl: 'app/shorten/shorten.html'
          })
 
	})

	.run(run);


	function run($rootScope) {
		// do things
	};

}).call(this);