var events = require('events'); 
var emitter = new events.EventEmitter(); 
var error  = function(){
	console.log("程序出错了");
}
emitter.on("error",error);


emitter.on("aa",function(arg1,arg2){
	
	console.log(arg1+arg2);
	
});

emitter.emit("aa","a","b");

emitter.emit("aa");