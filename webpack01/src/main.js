
var obj1 = require("./01.js") 
var obj2 = require("./02.js") 
require("./style.css")


console.log("hello"+obj2.add(1,4))
obj1.write("你好啊webpack"+obj2.add(5,5))

