angular.module('grasshopper.view', ['grasshopper.comms', 'grasshopper.model', 'ui.router'])
	
	.directive('ghView', function() {
		return {
			controller: function($scope, $timeout, $stateParams, comms, model) {
				$scope.model = model;
				$scope.local = {};

				$scope.get = function() {
					comms.get($stateParams.iconId);
				};

				$timeout($scope.get);
			}
		};
	});