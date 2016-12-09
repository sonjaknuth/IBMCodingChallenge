/**
 * Some simple super basic AngularJS for Header and Footer titles
 */

var App = angular.module("my_showcase", []);

App.controller("HeaderController", function($scope) {
	$scope.header = {};
	$scope.header.title = "Hero Title";
});

App.controller("FooterController", function($scope) {
	$scope.footer = {};
	$scope.footer.title = "Header";
});

App.controller("ImgController",function($scope) {
	$scope.imgs = [
			{
				"path" : "img/pencils.png",
				"name" : "pencils",
				"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eatur."
			}, {
				"path" : "img/tulip-istanbul.png",
				"name" : "tulips",
				"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eatur."
			}, {
				"path" : "img/clock.png",
				"name" : "clock",
				"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eatur."
			} ];
});
