'use strict';

angular.module('appTestApp')
.service('productManager', function(){
    var product = {
      initialList: [{name: 'Play', price: '10'},{name: 'test', price : '20'}],
      addProduct: function(prodotto, lista){
        lista.push({name: prodotto.name, price: prodotto.price});
      },
      getInitialList: function(){
        return new Promise(function(resolve, reject){
          if (product.initialList.length > 0){
            resolve(product.initialList);
          }else{
            reject('nessun valore');
          }
        });

      }
    };
    return product;
  });
