"use strict";

var _es = require("./es6\u65B9\u6CD5\u5BFC\u51FA.js");

console.log("hello Es6模块化分步导出" + (0, _es.add)(5, 5)); //Es6导入需要使用import关键字,如果一个一个导出的需要一个一个分别接收,且方法名必须和导出的一致
//node不支持import关键字,所以想要执行还需要使用dadel来转化成es5格式再执行