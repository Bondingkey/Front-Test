//es6中使用方法导出需要使用关键字export,可以一个一个的导出,也可以批量导出,批量导出使用export default
//一次性全部导出
export default {
    add(a,b){
        return parseInt(a)+parseInt(b)
    },
    sub(a,b){
        return parseInt(a)-parseInt(b)
    }
}