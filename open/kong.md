# Kong

## 安装

```bash
# postgresql
sudo docker run -d --name kong-database \
                -p 5432:5432 \
                -e "POSTGRES_USER=kong" \
                -e "POSTGRES_DB=kong" \
                -e "POSTGRES_PASSWORD=kong" \
                postgres:9.6

# 初始化数据库
sudo docker run --rm \
    --link kong-database:kong-database \
    -e "KONG_DATABASE=postgres" \
    -e "KONG_PG_HOST=kong-database" \
    -e "KONG_PG_PASSWORD=kong" \
    -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" \
    kong kong migrations up

# kong
sudo docker run -d --name kong \
    --link kong-database:kong-database \
    -e "KONG_DATABASE=postgres" \
    -e "KONG_PG_HOST=kong-database" \
    -e "KONG_PG_PASSWORD=kong" \
    -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" \
    -e "KONG_PROXY_ACCESS_LOG=/dev/stdout" \
    -e "KONG_ADMIN_ACCESS_LOG=/dev/stdout" \
    -e "KONG_PROXY_ERROR_LOG=/dev/stderr" \
    -e "KONG_ADMIN_ERROR_LOG=/dev/stderr" \
    -e "KONG_ADMIN_LISTEN=0.0.0.0:8001, 0.0.0.0:8444 ssl" \
    -p 80:8000 \
    -p 443:8443 \
    -p 8001:8001 \
    -p 8444:8444 \
    kong

# konga 数据库
sudo docker run --link kong-database:kong-database --rm pantsel/konga:latest -c prepare -a postgres -u postgresql://kong:kong@kong-database:5432/konga

# konga
sudo docker run -d -p 1337:1337 \
          --link kong-database:kong-database \
          -e "TOKEN_SECRET=123456" \
          -e "DB_ADAPTER=postgres" \
          -e "DB_URI=postgresql://kong:kong@kong-database:5432/konga" \
          --name konga \
          pantsel/konga    
```

## 使用

> upstream --> services --> routes