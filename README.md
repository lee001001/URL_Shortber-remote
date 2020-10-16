# 短網址產生器

## 功能
* 使用者可以在表單輸入原始網址，畫面會回傳格式化後的短網址
* 在伺服器啟動期間，輸入提供的短網址，可以導向原本的網站

## 安裝
### 設定 Mongodb
1. 打開 DB
```
[~] $ cd ~/mongodb/bin/
[~/mongodb/bin] $ ./mongod --dbpath ~/mongodb-data
```
2. 產生資料庫並且命名 "url-shorten-service"
```
add url-shorten-service
```

### 啟動專案
1. 複製Git 到本地端
```
git clone https://github.com/lee001001/URL_Shortber-remote.git
```

2. 進入到資料夾
```
[~] $ cd short-url-generate
```

3. 下載 packages
```
[~/short-url-generate] $ npm install
```

4. 執行專案
```
[~/short-url-generate] $ npm run start

```


## 指定規格
* MongoDB & Mongoose
* 輸出格式：５碼英數組合
* node & express

