'use strict';

angular.module('appTestApp')
  .service('productManager', function () {
      this.initialList = [{ name: 'Play', price: '10' }, { name: 'test', price: '20' }];
      var that = this;
      this.addProduct = function (prodotto, lista) {
        lista.push({ name: prodotto.name, price: prodotto.price });
      };
      this.getInitialList = function () {
        return new Promise(function (resolve, reject) {
          if (that.initialList.length > 0) {
            setTimeout(function () {
              resolve([that.initialList, true]);
            }, 2000);
          } else {
            reject('nessun valore');
          }
        });
      };
  });
