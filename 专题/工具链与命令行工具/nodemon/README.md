# nodemon

nodemon用来监视node.js应用程序中的任何更改并自动重启服务,非常适合用在开发环境中。

nodemon将监视启动目录中的文件，如果有任何文件更改，nodemon将自动重新启动node应用程序。

nodemon不需要对代码或开发方式进行任何更改。 

nodemon只是简单的包装你的node应用程序，并监控任何已经改变的文件。

nodemon只是node的替换包，只是在运行脚本时将其替换命令行上的node。

## nodemon.json配置项

- restartable-设置重启模式
- ignore-设置忽略文件
- verbose-设置日志输出模式，true 详细模式
- execMap-设置运行服务的后缀名与对应的命令
    - js-使用 nodemon 代替 node
- watch-监听哪些文件的变化，当变化的时候自动重启
- ext-监控指定的后缀文件名
