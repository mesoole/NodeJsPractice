var Emitter = require('./emitter');
var emit = new Emitter();

emit.on('greet',function(){
    console.log('Hi From CS572');
});
emit.on('greet',function(){
    console.log('Hi from CS472');
});

console.log('Hello!');
emit.emit('greet');