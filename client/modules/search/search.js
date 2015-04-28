angular.module('grasshopper.search', ['grasshopper.comms', 'grasshopper.model'])
	
	.directive('ghSearch', function() {
		return {
			controller: function($scope, $timeout, comms, model) {
				$scope.model = model;
				$scope.local = {};

				$scope.search = function() {
					comms.search($scope.local.search);
				};

				$timeout($scope.search);
			}
		};
	});