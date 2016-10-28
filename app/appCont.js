/**
 * Created by rsmathew on 10/25/16.
 */
var app1 = angular.module('OSHack', []);

app1.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });
                event.preventDefault();
            }
        });
    };
});

app1.directive('scrollToLast', ['$location', '$anchorScroll', function($location, $anchorScroll){

    function linkFn(scope, element, attrs){
        $location.hash(attrs.scrollToLast);
        $anchorScroll();
    }
    return {
        restrict: 'AE',
        scope: {
        },
        link: linkFn
    };
}]);

app1.controller('contentController', ['$scope','$http', function($scope, $http) {

    $scope.userMsg = "Angular team meeting notes for this week: Yet more new team members on Material, Universal in core, going to China.";
    $scope.botMsg = "AngularJS is a structural framework for dynamic web apps. It lets you use HTML " +
        "as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. ";
    // Message inbox
    $scope.messages = [];

    $scope.callback = function(data){
        alert(data);
    };

    $scope.setAPI = function(type, value){
        var url = "http://172.99.106.89:8080/set?key=flavor&value=m1.large";
        var data = $http.jsonp(url)
            .success(function(response){
                console.log("success");
                console.log(response);
                // $scope.sendMsg(response);
            }).error(function(response){
                console.log("failure");
            });
        $scope.userMsg = "";
    };

    $scope.recieveMsg = function(userMsg){
        var msg = {};
        if(userMsg.length <= 0)
            return;
        msg.time = new Date().getTime();
        msg.sender = 'user';
        msg.text = {message: userMsg, list:[], button:'False'};
        $scope.messages.push(msg);

        var url = "http://172.99.106.89:8080/chat?question=create%20vm";

        var data = $http.jsonp(url)
            .success(function(response){
            console.log("success");
            console.log(response);
            $scope.sendMsg(response);
        }).error(function(response){
            console.log("failure");
        });
        $scope.userMsg = "";
    };

    $scope.sendMsg = function(data){
        var msg = {};
        if(data.length <= 0)
            return;
        msg.time = new Date().getTime();
        msg.sender = 'bot';
        msg.text = data;
        $scope.messages.push(msg);
    };
}]);
