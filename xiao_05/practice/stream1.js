var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';
var index =null ;
// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
index = writerStream.end();
console.log("index:"+index);
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

var data = '';

// 创建可读流
var readerStream = fs.createReadStream('output.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
   console.log("读取完毕");
});

readerStream.on('error', function(err){
   console.log(err.stack);
});


console.log("程序执行完毕");