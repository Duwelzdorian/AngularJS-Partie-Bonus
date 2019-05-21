var app = angular.module("myApp", []);
app.controller('myControler', ['$scope', function ($scope) {
    $scope.regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
}]);
