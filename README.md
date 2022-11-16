# BookMarket Project

一個個人練習用的 Project，無任何商業意圖  
本網站中的內定人名、書籍皆純屬虛構

## 內容功能

### 一般功能

**帳號註冊、登入**  
初次到訪網站的使用者可透過使用 email 註冊一個個人的帳號，以使用本網站的更多功能  
註冊成功並登入後，便可在個人檔案（Profile）頁面觀看或修改個人的資料，以及在「My Books」頁面觀看個人所持有的書籍

**搜尋現有的架上書籍**  
在「沒有登入」的情況下，使用者依舊可以在「Search Book」頁面使用書籍種類或書籍名稱全名來搜尋書籍、觀看書籍的基本資料與其他讀者對這本書的評價

### 作者（author）功能

**上架書籍**  
可在「Post Book」頁面填寫書籍資料並上架

**編輯書籍**  
可在「My Books」頁面審視自己上架過的書籍資料，並可以更改其相關的內容

### 一般使用者（user）功能

**購買書籍**  
只有以此身份登入後，才可以在「Search Book」頁面完成購買書籍的動作  
（目前尚未新增需輸入金融卡號碼才可以購買的功能，故直接點擊購買即可）

**評論書籍**  
可在「My Books」頁面觀看購買過的書籍詳細，並對它撰寫個人評論  
完成撰寫後，可在「My Reviews」頁面觀看自己寫過的內容，並可對其編輯或刪除  
也可以在「Search Book」頁面的該書籍詳細處看到自己的評論

## 構成

### 前端

使用 React 和 Bootstrap 做頁面的呈現

### 後端

使用 Node.js、Mongoose、express、MongoDB Atlas 來做 API 的撰寫與資料庫的處理

## 待改進事項

- 網站的初載入速度偏慢（~2s）
- 搜尋書籍頁面可再加入其他元素輔助看書 ex. 評價排行前五
