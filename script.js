

angular.module('ng3', ['s-viewer'])
.service('srv', ['$rootScope', function($rootScope) {
    this.change_name = function(argument) {
        $rootScope.name = argument;
    }
}])
.controller('ngC1', ['$scope', '$rootScope', '$timeout', 'srv', '$interval', function($scope, $rootScope, $timeout, srv, $interval) {

    $scope.digital = new Date();
    $scope.datetime = new Date();
    $scope.alarmTime = new Date('17:03');
    $interval(function() {
        $scope.digital = new Date();
    }, 1000);

}]);
