angular.module('todoListApp', [])

.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function() {
		console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!|");
	};

	$scope.todos = [
		{"name": "clean the house"},
		{"name": "water the dog"},
		{"name": "feeed the lawn"},
		{"name": "pay dem bills"},
		{"name": "run"}
	]
})

.controller('coolCtrl', function($scope) {
	$scope.whoAmI = function() {
		console.log("Hello there, this is the coolCtrl function!");
	};	
})