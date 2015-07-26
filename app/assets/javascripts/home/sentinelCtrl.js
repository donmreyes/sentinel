angular.module('Sentinel')
.controller('SentinelCtrl', ['$scope',
	function($scope){
		$scope.template = {
			"brand": "home/_brand.html",
			"notifications": "home/_notifications.html",
			"graph": "home/_graph.html",
			"project": "home/_project.html"
		}
	}]
);