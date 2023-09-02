# Docker

## 常用命令（以 MySQL 为例）

1. 拉取镜像

   ```sh
   docker pull mysql
   ```

2. 创建容器

   ```sh
   docker run -p [主机端口]:[容器应用端口] --name [自定义容器名称] \
   -v 主机文件路径:容器内路径 \
   -e 环境变量键=值 \
   [镜像名称]:[版本号] 或 [镜像名称] (默认使用 latest)
   ```

   ```sh
   docker run -p 3306:3306 --name mysql8 \
   -v ~/Dev/Docker/mysql/data:/var/lib/mysql \
   -v ~/Dev/Docker/mysql/conf:/etc/mysql/conf.d \
   -v ~/Dev/Docker/mysql/log:/var/log \
   -e MYSQL_ROOT_PASSWORD=111 mysql
   ```

3. 进入容器内的 Terminal，或执行容器内的命令

   ```sh
   docker exec -it [容器名称] [命令]
   ```

   ```sh
   docker exec -it mysql8 /bin/bash
   docker exec -it mysql8 mysql -uroot -p111
   ```

4. 停止容器

   ```sh
   docker stop mysql8
   ```

5. 删除容器

   ```sh
   docker rm mysql8
   ```

