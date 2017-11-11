# HTTP Status Code
* 200  ok 表示请求成功
* 201  Created 表示请求刚刚建好
* 202  Accepted  表示请求建好了，并且服务器已经接受了，但是未处理
* 204  No Content 表示服务器已经处理好了请求，但是不需要返回实体内容
* 300  Multiple Choices  需要选择一个地址作为重定向的首选
* 301  Moved Permanently  被请求的资源已经被永久的移到新的地方了
* 302  Move temporarily  被请求的资源临时性的从别的url响应
* 304  Not Modified  请求的内容没有发生改变
* 305  Use Proxy  需要代理才能访问
* 400  Bad Request  请求错误
* 401  Unauthorized  需要验证
* 403  Forbidden 服务器拒绝执行
* 404  Not Found  请求失败，没有找到需要请求的资源
* 405  Method Not Allowed  请求的方法不能请求相应的资源
* 408  Request Timeout  请求超时
* 409  Conflict  请求冲突
* 423  Locked  请求的资源被锁了
* 500  Internal Server Error  服务器错误
* 503  Service Unavailable  服务器临时维护
* 505  HTTP Version Not Supported 服务器不支持使用的http版本
* 600  Unparseable Response Headers  没有返回头部