// es5模块的导入,需要使用require方法
var aaa = require("./es5方法导出.js")
//由于导出的时候导出的是一个方法,所以aaa此时也是一个方法,可以调用方法中的sum
var bbb = aaa.sum(5,5)

console.log("hello Es5model化"+bbb)