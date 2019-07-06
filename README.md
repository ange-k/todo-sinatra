# 前提
Dockerの導入が必要
# 起動、終了
起動 | `docker-compose up`
終了 | `docker-compose stop`
# 初回起動時
- DBを作成する必要あり
## 起動後に実行
```
docker-compose exec sinatra-api-server rake db:create
docker-compose exec sinatra-api-server rake db:migrate
```

## モデルファイル追加時に実行
```
docker-compose exec sinatra-api-server rake db:migrate
```

## migrateファイルの作成
```
docker-compose exec sinatra-api-server rake db:create_migration NAME=XXXXX
```