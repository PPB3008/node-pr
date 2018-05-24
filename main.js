var fibonacci = function (n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};

exports.fibonacci = fibonacci;
//直接在命令行里执行main.js  此处会被执行
if(require.main === module) {
    var n = Number(process.argv[2]); //n定义为node的第二个参数  第一个是文件名
    console.log('fibonacci('+n+') is',fibonacci(n));
}