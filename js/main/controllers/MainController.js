App.controller('MainController', function($scope, toaster){
  $scope.people = []
  $scope.human = {}

  $scope.submitForm = function (form) {
    if(form.$valid){
      $scope.people.push($scope.human);
      toaster.pop('success', "Success", "User was added");
      $scope.human = {}
    } else {
      toaster.pop('error', "Error", "All fields are required");
    }
  }

  $scope.destroy = function (index) {
    $scope.people.splice(index, 1);
  }
})
