var App = angular.module("app",[]);

App.controller("newCtrl",function($scope,load){
    load.then(function(res){
        $scope.data = res.data;
    })
    $scope.sortType = 'ID'; // set the default sort type
    $scope.sortReverse = false;
    $scope.search='';

});

App.directive('display',function () {
        return {
            restrict:'E',
            templateUrl:'fetchData.html'
        }
    }

);




