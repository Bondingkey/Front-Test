const http = require('http');                                //引用Nodejs的http模块  
http.createServer(function (request, response) {             //用http模块创建一个服务器,相当于创建一个HTTP协议的服务器
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'}); //指明服务器的一些信息
    // 发送响应数据 "Hello World"
    response.end('Hello Server');                            //向服务器发送数据
}).listen(8888);                                             //指定服务器的端口号
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');