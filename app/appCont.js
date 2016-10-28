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

    $scope.userMsg = "";
    $scope.botMsg = "";
    // Message inbox
    $scope.messages = [];

    $scope.callback = function(data){
        alert(data);
    };

    $scope.setAPI = function(type, value){
        var url = "http://172.99.106.89:8080/set?key="+type+"&value="+value;
        var data = $http.jsonp(url)
            .success(function(response){
                console.log("success");
                $scope.sendMsg(response);
            }).error(function(response){
                console.log("failure");
            });
    };

    $scope.recieveMsg = function(userMsg){
        var msg = {};
        if(userMsg.length <= 0)
            return;
        msg.time = new Date().getTime();
        msg.sender = 'user';
        msg.text = {message: userMsg, list:[], button:'False'};
        $scope.messages.push(msg);

        var url = "http://172.99.106.89:8080/chat?question="+userMsg;

        var data = $http.jsonp(url)
            .success(function(response){
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
