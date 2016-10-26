/**
 * Created by rsmathew on 10/25/16.
 */
var app1 = angular.module('app1', []);

app1.controller('appCtrl', function($scope) {

    $scope.userMsg = "Help spin VM";
    // Message inbox
    $scope.messages = [];

    $scope.recieveMsg = function(){
        var msg = {};
        msg.time = new Date().getTime();
        msg.text = $scope.userMsg;
        $scope.messages.push(msg);

    };

    $scope.sendMsg = function(){
        $scope.sentMsg = $scope.userMsg;
    };
});
