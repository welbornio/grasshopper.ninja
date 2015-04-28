angular.module('grasshopper', ['grasshopper.search', 'grasshopper.view', 'ui.router'])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('search', {
				url: '/',
				templateUrl: '/client/modules/search/search.html'
			})
			.state('view', {
				url: '/icons/:iconId',
				templateUrl: '/client/modules/view/view.html'
			});

		$locationProvider.html5Mode({
  			enabled: true,
  			requireBase: false
		});
	});