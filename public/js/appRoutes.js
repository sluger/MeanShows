angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/shows', {
            templateUrl: 'views/shows.html',
            controller: 'ShowController'
        });

    $locationProvider.html5Mode(true);
}]);
