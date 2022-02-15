# npx 
npx 想要解决的主要问题，就是调用项目内部安装的模块。

一般来说，调用 Mocha ，只能在项目脚本和 package.json 的scripts字段里面， 如果想在命令行下调用，必须像下面这样。
```shell script
# 
node_modules/.bin/webpack-dev-server 
# 
npx webpack-dev-server
```

npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。

由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。
