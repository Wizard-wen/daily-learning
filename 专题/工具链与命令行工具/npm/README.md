# npm 


## 查看npm信息


## 发布npm 


## npm配置


# 发布npm package

## 初始化 npm 包

> npm init -y

## package.json
### npm name
### npm main
入口文件
### npm version 版本号
major.minor.patch(大版本.小版本.补丁版)

大版本，做了不兼容的API修改

小版本，添加了向后兼容的功能

补丁版，做了向后兼容的bug修复

## .npmignore

用.npmignore文件来记录不发布的私有文件，在这个文件里面添加你不想上传的私有文件

## 注册npm 账户

## 
> npm login 

### 添加用户
> npm adduser 

### 确认个人信息
> npm whoami

## 踩坑：镜像问题
镜像必须确保是npm官方镜像。

淘宝镜像：
> npm config set registry https://registry.npm.taobao.org

npm官方镜像：
> npm config set registry https://registry.npmjs.org/
