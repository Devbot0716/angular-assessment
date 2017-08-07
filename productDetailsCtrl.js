angular.module('assessment')
  .controller('productDetailsCtrl', function($scope, $stateParams, shopService){
    console.log($stateParams.id)
    shopService.getProductdetails($stateParams.id)
      .then(function(productDetails){
      $scope.details = productDetails;
      console.log($scope.details)
    })
  })
