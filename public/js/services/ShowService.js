var app = angular.module('ShowService',['ngResource']);
angular.module('ShowService').factory('Show', function($resource) {
    return $resource('/api/v1/shows/:id');
});
