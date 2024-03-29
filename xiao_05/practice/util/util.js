var util = require('util'); 
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.dir(objSub); 

var util = require('util'); 
function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
    return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 




var util = require('util');

console.log(util.isArray([]))
  // true
console.log(util.isArray(new Array))
  // true
console.log(util.isArray({}))
  // false
  
  
var util = require('util');

console.log(util.isRegExp(/some regexp/));
  // true
console.log(util.isRegExp(new RegExp('another regexp')));
  // true
console.log(util.isRegExp({}));
  // false
  
  


var util = require('util');

console.log(util.isDate(new Date()));
  // true
console.log(util.isDate(Date()));
  // false (without 'new' returns a String)
console.log(util.isDate({}));
  // false