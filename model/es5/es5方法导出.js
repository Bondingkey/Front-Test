// 定义成员：
const sum = function(a,b){
    return parseInt(a) + parseInt(b)
}
const subtract = function(a,b){
    return parseInt(a) - parseInt(b)
}
const multiply = function(a,b){
    return parseInt(a) * parseInt(b)
}
const divide = function(a,b){
    return parseInt(a) / parseInt(b)
}
// 注意:以上方法相当于java中被pivate修饰的一样,出了此js文件之后就访问不到了
// 要想访问需要导出一下,es5使用的导出方法是module.exports={指定的方法}
// 导出的方法是一个方法

module.exports={
    sum:sum,
    subtract:subtract,
    multiply:subtract,
    divide:subtract
}