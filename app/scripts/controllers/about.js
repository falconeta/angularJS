'use strict';

/**
 * @ngdoc function
 * @name appTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appTestApp
 */
angular.module('appTestApp')
  .controller('AboutCtrl',['restService', function (restService) {
    console.log(restService.getUser());
    
    restService.getUser().then(function(data){
      console.log(data.data);
    });
  }]);
