'use strict';

angular.module('appTestApp')
    .factory('User', function () {

        var User =
            //costruttore
            function (user) {
                this.firstName = user.name.first;
                this.lastName = user.name.last;
                this.title = user.name.title;
                this.email = user.email;
                this.street = user.location.street;
                this.city = user.location.city;
                this.state = user.location.state;
                this.postcode = user.location.postcode;
                this.img = user.picture.large;
            };
        /**
         * Public method, assigned to prototype
         */
        User.prototype.getFullName = function () {
            return this.firstName + ' ' + this.lastName;
        };

        User.prototype.getFullStreet = function(){
            return  this.street + ', ' + 
                    this.city + ', ' + 
                    this.state + ', '+
                    this.postcode;
        };
        /**
         * Return the constructor function
         */
        return User;
    });