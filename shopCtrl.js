angular.module('assessment')
  .controller('shopCtrl', function($scope, shopService){

    $scope.getProducts = function(){
      shopService.getProducts().then(function(products){
        $scope.products = products;
      })
    }
    $scope.getProducts();
  })
