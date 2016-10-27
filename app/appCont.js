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

app1.controller('contentController', function($scope) {

    $scope.userMsg = "Angular team meeting notes for this week: Yet more new team members on Material, Universal in core, going to China.";
    $scope.botMsg = "AngularJS is a structural framework for dynamic web apps. It lets you use HTML " +
        "as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. ";
    // Message inbox
    $scope.messages = [];

    $scope.recieveMsg = function(){
        var msg = {};
        if($scope.userMsg.length <= 0)
            return;
        msg.time = new Date().getTime();
        msg.sender = 'user';
        msg.text = $scope.userMsg;
        $scope.messages.push(msg);
        $scope.userMsg = "";

    };

    $scope.sendMsg = function(){
        var msg = {};
        if($scope.userMsg.length <= 0)
            return;
        msg.time = new Date().getTime();
        msg.sender = 'bot';
        msg.text = $scope.botMsg;
        $scope.messages.push(msg);
    };

    $scope.getList = function(){
        return $scope.showList ? "unhistory.html" : "history.html";
    };
});
