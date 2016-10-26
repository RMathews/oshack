/**
 * Created by rsmathew on 10/25/16.
 */
var app1 = angular.module('app1', []);

app1.controller('contentController', function($scope) {

    $scope.userMsg = "Help spin VM";
    $scope.botMsg = "Help";
    // Message inbox
    $scope.messages = [];


    $scope.recieveMsg = function(){
        var msg = {};
        msg.time = new Date().getTime();
        msg.sender = 'you';
        msg.text = $scope.userMsg;
        $scope.messages.push(msg);

    };

    $scope.sendMsg = function(){
        var msg = {};
        msg.time = new Date().getTime();
        msg.sender = 'me';
        msg.text = $scope.botMsg;
        $scope.messages.push(msg);
    };
});
