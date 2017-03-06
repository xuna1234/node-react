
//s引入核心HTTP模块
var http=require("http");
//创建一个web服务器createServer()
var httpServer=http.createServer();

//step3:为服务器指定事件监听器，监听客户端的请求
httpServer.on("request",function(){
    console.log("有客户端的请求");
});

//step4:运行服务器,在指定它运行在端口号（Port》1024）
httpServer.listen(8080);
console.log("web服务器正在运西瓜在8080端口。。。。");

