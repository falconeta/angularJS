'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .factory('productManager', function(){
    var product = {
      initialList: [{name: 'Play', price: '10'},{name: 'test', price : '20'}],
      addProduct: function(prodotto, lista){
        lista.push({name: prodotto.name, price: prodotto.price});
      },
      getInitialList: function(){
        return product.initialList;
      }
    };
    return product;
  })
  .controller('MainCtrl',['$scope', 'productManager', function ($scope, productManager) {
    $scope.productList = productManager.getInitialList();
    $scope.data = ['dato1',  'dato2', 'dato3'];
    $scope.addProduct = function (product){
      //$scope.productList.push({name: product.name, price: product.price});
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
