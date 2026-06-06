# Time Library｜升中任務篇 網站檔案 v1

這是一個可直接放入 GitHub Pages 的靜態網站初版。

## 檔案用途

- `index.html`：首頁 / 漫畫目錄
- `reader.html`：單集閱讀器
- `episodes-data.js`：所有集數資料中心
- `about.html`：關於本網站 / 聲明
- `characters.html`：角色介紹
- `tools.html`：升中工具箱 / 書籤
- `css/style.css`：網站樣式
- `js/main.js`：共用 JS、禁右鍵、資料 helper
- `comics/ep01/` 至 `comics/ep12/`：漫畫圖片資料夾

## 圖片放置規則

每集圖片放在對應資料夾：

```text
comics/ep01/01.png
comics/ep01/02.png
comics/ep01/03.png
```

圖片命名請用兩位數：`01.png`, `02.png`, `03.png`。

## 更新集數資料

修改 `episodes-data.js`：

```js
{
  id: "ep01",
  ep: "EP01",
  title: "我怎麼變成小薯仔了？",
  status: "published",
  folder: "comics/ep01/",
  pageCount: 18,
  fileExt: "png"
}
```

最重要：`pageCount` 必須等於實際圖片數量。

## 公開 / 隱藏

```js
status: "published" // 顯示
status: "hidden"    // 隱藏
```

## GitHub Pages 更新流程

1. 把整個資料夾內容放入 GitHub repo
2. 加入漫畫圖片
3. 檢查 `episodes-data.js` 的 `pageCount`
4. Commit
5. Push
6. 開 GitHub Pages 網址測試
7. 如看不到新版，在 URL 加 `?v=2` 或改 HTML 內 JS/CSS 版本號
