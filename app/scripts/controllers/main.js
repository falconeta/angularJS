'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('MainCtrl',['$scope', 'productManager', function ($scope, productManager) {
    $scope.product = {name: '', price: ''};
    productManager.getInitialList().then(function(array){
      $scope.productList = array;
    });
    this.data = ['dato1',  'dato2', 'dato3'];
    this.addProduct = function (product){
      productManager.addProduct(product, $scope.productList);
      $scope.product = {};
      console.log($scope.productList);
    };

  }])
  .directive('productList', function(){
    return {
      template: '<b>Nome Prodotto: </b><span>{{p.name | uppercase}} </span> <b>Prezzo Prodotto: </b><span>{{p.price | currency: "€ "}} </span>'
    };
  });
