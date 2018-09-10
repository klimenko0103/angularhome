angular.module('HelloWorldApp', [])
    .controller('HelloWorldController',['$scope', '$interval', function($scope, $interval) {

        $scope.greeting = "Hello World";
        $scope.records = [
            "Alfreds Futterkiste",
            "Berglunds snabbköp",
            "Centro comercial Moctezuma",
            "Ernst Handel",
        ]
        $scope.t = 0;
        $interval(function(){
            $scope.t++;
        }, 1000)

    }]);