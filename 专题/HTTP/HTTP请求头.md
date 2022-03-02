


### http请求头如何生成
- 浏览器自动生成的请求。
- 


### 能否修改http请求头 
- 有一些字段是绝对不能修改的，比如最重要的host字段，如果没有host值，http1.1协议会认为这是一个不规范的请求从而直接丢弃。
- 有一些字段能够修改，比如connection，cache-control等。
- 还有一些字段可以删除，比如你不希望网站记录你的访问行为或者历史信息，你可以删除cookie，referfer等字段。




数据类型与编码
- Accept
- Accept-Charset 
- Content-Type

- Accept-Encoding
- Content-Encoding

- Accept-Language
- Content-Language

- Vary 协商规则


分块传输

Response
- Transfer-Encoding: chunked

范围请求

Response
Accept-Ranges: bytes

Request
Range: bytes=x-y

Content-Range: bytes x-y/length


长、短连接

Response
Connection: keep-alive

Request 
Connection: close


keepalive_timeout 设置长连接的超时时间

keepalive_requests 设置长连接上可发送的最大请求次数


队头阻塞

- 客户端并发连接数量

DDoS 利用HTTP长连接特性对服务器发起大量请求，导致服务器最终耗尽资源"拒绝服务" 

域名分片


重定向 由服务器发起 302 301
Response
Location: /index.html



Cookie

Response 
Set-Cookie (允许多个)

Request
Cookie

Cookie生存周期

Expires  Max-Age

Cookie作用域

```http request
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
```
