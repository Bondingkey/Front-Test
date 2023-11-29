//Es6导入需要使用import关键字,如果一个一个导出的需要一个一个分别接收,且方法名必须和导出的一致
//node不支持import关键字,所以想要执行还需要使用dadel来转化成es5格式再执行
//由于导出时一次性导出可以使用变量接收,变量就代表那个方法全体
import obj from "./es6方法导出1.js"; 

console.log("hello Es6模块化一次性导出"+obj.add(5,5))