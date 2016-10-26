/**
 * Created by rsmathew on 10/25/16.
 */
var app1 = angular.module('app1', []);

app1.controller('appCtrl', function($scope) {

    $scope.userMsg = 1;
    // Message inbox
    $scope.messages = [];

    $scope.recieveMsg = function(){
        $scope.messages.push($scope.userMsg);

    };

    $scope.sendMsg = function(){
        $scope.sentMsg = $scope.userMsg;
    };
});
