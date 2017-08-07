angular.module('assessment')
  .service('shopService', function($http){

    this.getProducts = function(){
      return $http ({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/products'
      }).then(function(response){
        console.log(response.data)//shows objects in console
        return response.data;
      })
    }

    this.getProductdetails = function(ID){
      return $http ({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/products/' + ID
      }).then(function(response){
        console.log(response.data)//shows objects in console
        return response.data;
      })
    }
  })
