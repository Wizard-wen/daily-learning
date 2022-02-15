# npm的配置

# npm config
```shell script
# 获取npm的用户配置文件
npm config get userconfig # /Users/song/.npmrc

```

.npmrc配置文件读取顺序
```shell script
npm config set <key> <value> [-g|--global]  # 给配置参数key设置值为value
npm config get <key>          # 获取配置参数key的值
npm config delete <key>       # 删除置参数key及其值
npm config list [-l]      # 显示npm的所有配置参数的信息
npm config edit     # 编辑配置文件
npm get <key>     # 获取配置参数key的值
npm set <key> <value> [-g|--global]    # 给配置参数key设置值为value

```

