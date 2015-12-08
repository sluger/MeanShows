angular.module('ShowCtrl', []).controller('ShowController', function($scope,$http, Show) {
    
    Show.query(function(data) {
      $scope.shows = data;
    });
});
