/**
 * Created by rsmathew on 10/25/16.
 */
var app1 = angular.module('OSHack', []);

app1.controller('contentController', function($scope) {

    $scope.userMsg = "Angular team meeting notes for this week: Yet more new team members on Material, Universal in core, going to China.";
    $scope.botMsg = "AngularJS is a structural framework for dynamic web apps. It lets you use HTML " +
        "as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. ";
    // Message inbox
    $scope.messages = [];


    $scope.recieveMsg = function(){
        var msg = {};
        msg.time = new Date().getTime();
        msg.sender = 'user';
        msg.text = $scope.userMsg;
        $scope.messages.push(msg);

    };

    $scope.sendMsg = function(){
        var msg = {};
        msg.time = new Date().getTime();
        msg.sender = 'bot';
        msg.text = $scope.botMsg;
        $scope.messages.push(msg);
    };

    $scope.getList = function(){
      return $scope.showList ? "unhistory.html" : "history.html";
    };
});

