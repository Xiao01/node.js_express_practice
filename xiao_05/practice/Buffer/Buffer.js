  //Buffer操作二进制数据	 https://www.runoob.com/nodejs/nodejs-buffer.html
  
  
const buf = Buffer.from('abc', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));



