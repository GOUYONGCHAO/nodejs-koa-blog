<p align="center"><a href="http://www.homeworkdone.net" target="_blank" rel="noopener noreferrer"><img width="234" src="" alt="logo"></a></p>

## Docker 制作镜像

```
docker build --rm -f ./Dockerfile -t mysql:homeworkdone .
```

```
docker build --rm -f ./Dockerfile -t server:homeworkdone .
```
```
docker run --name server \
-p 3000:3000 \
-d server:homeworkdone
```

## Docker 启动命令
-v /var/lib/mysql:/var/lib/mysql \

```
docker run --name mysql \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=databasepwd \
-d mysql:homeworkdone
```


docker run --name mysql -e MYSQL_ROOT_PASSWORD=databasepwd -d -p 3306:3306 mysql:8.0
docker exec -it 82fc21d3e017 bash

## 变更权限
 alter user 'homeworkdone'@'localhost' IDENTIFIED WITH mysql_native_password BY 'homeworkdone' ;
## 新建用户
<!-- 新建用户 -->
create user "homeworkdone"@"localhost" identified by "homeworkdone";
CREATE DATABASE homeworkdone;
CREATE DATABASE IF NOT EXISTS homeworkdone DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
grant all privileges on 'homeworkdone'.* to 'homeworkdone'@'%' IDENTIFIED BY 'homeworkdone';



## 测试
curl http://localhost:3000/v1/article -X POST d "title=comewords&content=articleContent&author=gyc&cover=''&category_id=1234&browse=1"



##
mac

sudo lsof -i :3000