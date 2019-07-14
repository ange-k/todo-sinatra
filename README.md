# 前提
Dockerの導入が必要
# 起動、終了
|種別|コマンド|
|--|--|
|起動 | `docker-compose up`|
|終了 | `docker-compose stop`|

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

# Frontend開発環境
オートリロードに対応する.
### サーバ起動
```
npm start
```

# backend開発環境
**オートリロード未対応なので注意. (変更したらDocker再起動の必要がある)**  
### サーバ起動
```
./start.sh
```

### アクセス
```
curl -X POST "http://localhost:8080/todo?title=buy&status=todo&user_name=user" 
```
