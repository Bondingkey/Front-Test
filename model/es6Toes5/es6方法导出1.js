"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//es6中使用方法导出需要使用关键字export,可以一个一个的导出,也可以批量导出,批量导出使用export default
//一次性全部导出
exports.default = {
    add: function add(a, b) {
        return parseInt(a) + parseInt(b);
    },
    sub: function sub(a, b) {
        return parseInt(a) - parseInt(b);
    }
};