//event1.js 文件
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.setMaxListeners(2)
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 

function add(arg1,arg2){
	console.log("add: "+arg1+","+arg2);
};

emitter.addListener('someEvent',add);


emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
//emitter.removeAllListeners('someEvent');

emitter.emit('someEvent', 'a1 ', 'a2 ');

console.log(emitter.listenerCount('someEvent')) ;