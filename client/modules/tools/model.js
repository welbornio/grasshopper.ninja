angular.module('grasshopper.model', [])
	
	.factory('model', function($http) {
		var model = {
			searchResults: {},
			icon: {}
		};

		return model;
	});