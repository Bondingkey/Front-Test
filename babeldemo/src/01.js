// 转码前
// 定义数据
let input = [1, 2, 3]
// 将数组的每个元素 +1
input = input.map(item => item + 1)
console.log(input)

//转码步骤
//1.通过npm下载js文件npm install --global babel-cli
//2.准备要转码的js页面
//3.在项目的根目录下面创建一个.babelrc文件,里面写明要转码到那个版本,通常是es2015
//4.根据你在.babelrc文件指明的转码版本下载相应的转码器,npm install --save-dev babel-preset-es2015
//5.使用命令转码:babel src/example.js --out-file dist1/compiled.js或者babel src/example.js -o dist1/compiled.js