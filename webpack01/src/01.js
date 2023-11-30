//webpack可以用来打包js,css等资源,这样网站上就不用引入过多的js,css链接,
//webpack步骤
//1.下载依赖npm install -g webpack webpack-cli
//2.准备要打包的js页面
//3.在项目的根目录下面建立一个webpack.config.js,里面指定要打包的入口js,这个入口js引入的其他js也会被打包,再指定输出目录和输出文件名
//4.使用命令打包webpack 或者webpack --mode=development,也可以配置到package.json中的scripts里面,执行npm run XXX命令
//5.webpack也可以打包css为js文件,需要先准备css文件,同时在要打包的入口js文件中引入css文件
//6.修改webpack.config.js文件在与output同级别的地方加入module{XXX},指明打包信息,同时下载打包信息要用的依赖npm install --save-dev style-loader css-loader
function write(str){
    document.write(str);
}

//由于别的文件要引入,所以要先导出
module.exports={
    write:write
}