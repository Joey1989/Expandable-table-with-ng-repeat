var myapp=angular.module("myapp",[]);
myapp.controller("userCtrl",function($scope){
     $scope.usert={job:""};
     $scope.users=[{id:1,name:"jo",age:25,sex:"M",job:"QA"},{id:2,name:"joey",age:24,sex:"M",job:"VP"},{id:3,name:"jenny",age:23,sex:"F",job:"PM"}];
     $scope.selectedRow=function(user){
        $scope.usert=user;
     };
})