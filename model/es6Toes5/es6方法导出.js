"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
exports.sub = sub;
//es6中使用方法导出需要使用关键字export,可以一个一个的导出,也可以批量导出
//一个一个导出
function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function sub(a, b) {
    return parseInt(a) - parseInt(b);
}