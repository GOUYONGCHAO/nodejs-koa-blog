'use strict';
function asyncfun(name){
    return new Promise(function(resolve){
            setTimeout( function(){ 
                resolve('my name is '+ name);
        });
    });
}
function * fun(){
    console.log(asyncfun('leo'));
}
fun();