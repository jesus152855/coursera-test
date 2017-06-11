(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController)
  LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.name = "Jesus";
    $scope.listUser = "";
    $scope.userMessage = "";
    $scope.fontColor = "";
    $scope.borderStyle = "";
    $scope.borderColor = "";
    $scope.clickTooMuch = function proccessItems(){
      var items = countItems($scope.listUser.split(","));
        console.log(items);
        $scope.borderStyle = "solid";
        if (items == 0) {
          $scope.userMessage = "Please enter data first";
          $scope.fontColor = "red";
          $scope.borderColor = "red";
        }else {

        if (items <= 3) {
          $scope.userMessage = "Enjoy!";
        } else {
          $scope.userMessage = "Too much!";
        }
        $scope.fontColor = "green";
        $scope.borderColor = "green";
      }
    };
  };

  function validateIsEmpty(string){
    if (string.length == 0) {
      return true;
    }else {
      return false;
    }
  };

  function countItems(list){
    var itemsNoEmpty = 0;
    for (var i = 0; i < list.length; i++) {
      if(!validateIsEmpty(list[i])){
        itemsNoEmpty++;
      }
    }
    console.log('Items' + itemsNoEmpty);
    return itemsNoEmpty;
  };



}

)();
