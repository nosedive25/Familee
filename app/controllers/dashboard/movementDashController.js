familee.controller('movementDashController', ['$scope', '$timeout', '$location', '$http', '$rootScope', function($scope, $timeout, $location, $http, $rootScope) {
	$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	$scope.series = ['Steps Per Day'];

	$scope.data = [[65, 59, 80, 81, 56, 55, 40]];

	$scope.labels = [];
	$scope.series = ['Steps Per Day'];

	$scope.data = [[]];

	for (var i = 0; i < $rootScope.steps['activities-tracker-steps'].length; i++) {
		console.log($rootScope.steps['activities-tracker-steps'][i]);
		$scope.data[0].push($rootScope.steps['activities-tracker-steps'][i].value);
		$scope.labels.push($rootScope.steps['activities-tracker-steps'][i].dateTime);
	};
}]);