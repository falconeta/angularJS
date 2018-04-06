'use strict';

var User = Class.extend({
    init: function(nome){
        this.nome = nome;
    },
    name: function(){
        return this.nome;
    }
});
