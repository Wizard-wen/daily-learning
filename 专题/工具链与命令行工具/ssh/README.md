# 多个ssh配置
## ssh key生成

```shell script
# 生成ssh
ssh-keygen -t rsa -C "youremail@xxx.com"
```

按下回车，生成ssh后，给密钥取个名字。

```shell script
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/***/.ssh/id_rsa): id_rsa_customer(自定义密钥名字)
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in 
id_rsa_company
Your public key has been saved in 
id_rsa_company.pub.
```
生成的id_rsa_customer.pub文件为公钥

## 在本地ssh Agent中添加key
```shell script
ssh-add -K ~/.ssh/id_rsa_customer
```


## 修改ssh config文件

配置文件路径：~/.ssh/config

```shell script
# personal
Host personal.github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa

# company
Host company.github.com  # 这个名字可任意设置
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_work
```

测试一下

```shell script
ssh -T git@personal.github.com
```
