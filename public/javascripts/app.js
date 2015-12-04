	angular.module('omdb', ['ngRoute'])
	.controller('HomeController', function($scope, $http){
		$scope.searchAPI = function(){
			$http.get('https://www.omdbapi.com/?s=' + $scope.movie).then(function(data){
				$scope.movieData = data.data.Search;
				console.log($scope.movieData)
			})
		}
	})
	.controller('ShowController', function($scope, $http, $routeParams){
		$scope.param1 = $routeParams.param1;
			$http.get('https://www.omdbapi.com/?i=' + $scope.param1).then(function(movie){
				$scope.showData = movie.data;
				console.log($scope.showData)
		})
	})


	.config(function($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/partials/home.html',
			controller: 'HomeController'
		})
		.when('/:param1', {
			templateUrl: '/partials/show.html',
			controller: 'ShowController'
		})

		$locationProvider.html5Mode(true)
	})