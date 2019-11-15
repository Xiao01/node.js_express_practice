
var path = require("path")

console.log(path.resolve('/foo/bar', './baz'));
// 返回: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'));
// 返回: '/tmp/file'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// 如果当前工作目录为 /home/myself/node，
// 则返回'/home/myself/node/wwwroot/static_files/gif/image.gif'


console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));



var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));
