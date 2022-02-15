# 问题汇总

## 场景1 本地已存在的git仓库关联到remote仓库时报错

### 场景还原1

将本地仓库手动设置远程仓库地址

```shell
$git remote add origin https://github.com/xxx/xxx
```

本地仓库推送时会报错

> fatal: refusing to merge unrelated histories

> 出现这个问题的最主要原因还是在于本地仓库和远程仓库实际上是独立的两个仓库

### 场景还原2

pull request时提示
> github显示There isn’t anything to compare.

### 解决办法

```shell script
git pull origin master --allow-unrelated-histories
```

## 场景2 代码合并
```shell
# 先切换到merge的目标分支
git checkout targetBranch
# 将其他分支代码merge到目标分支
git merge branchWaitingForMerge
```

## 场景3 删除分支上已存在的文件


## 场景4 git版本回退


## 场景5 紧急修复bug，但是当前分支存在不能提交的代码


```shell
# 将所有未提交的修改（提交到暂存区）保存至堆栈中
git stash
# 给本次存储加个备注，以防时间久了忘了
git stash save "存储"
# 存储未追踪的文件
git stash -u
```


## 场景6 拉取远程分支并创建本地分支


### case 1
使用该方式会在本地新建分支x，并自动切换到该本地分支x。

> 采用此种方法建立的本地分支会和远程分支建立映射关系。

```shell
git checkout -b 本地分支名x origin/远程分支名x
```
### case 2

使用该方式会在本地新建分支x，但是不会自动切换到该本地分支x，需要手动checkout。

> 采用此种方法建立的本地分支不会和远程分支建立映射关系。

```shell
git fetch origin 远程分支名x:本地分支名x
```


## 场景7 建立当前分支与远程分支的映射关系

```shell
# 方法1
git branch -u origin/branch
# 方法2
git branch --set-upstream-to origin/branch
```
