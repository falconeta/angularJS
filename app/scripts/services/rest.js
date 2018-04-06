'use strict';

angular.module('appTestApp')
  .service('restService', ['$http', function($http){
    this.url= 'https://randomuser.me/api/';
    this.getUser = function() {
        return $http.get(this.url);
    };
  }]);