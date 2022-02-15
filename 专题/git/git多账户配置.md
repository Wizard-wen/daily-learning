# git多账户配置

## ssh key生成

[ssh key生成方式](../工具链与命令行工具/ssh/README.md)

## git配置
```shell script
# git remote
git remote rm origin
git remote add origin git@personal.github.com:xxx/xxx.git
git remote add origin git@company.github.com:xxx/xxx.git

# git config 
git config user.email "xxx@xxx.com"
git config user.name "xxname"
```
