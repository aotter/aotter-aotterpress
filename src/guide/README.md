# AotterPress 技術文件

使用 [vuepress](https://vuepress.vuejs.org/) v1.x 建立的文件網站

## 環境搭建

node 14.x  
main branch: `master`  

初始化

```bash
npm ci
```

開發環境
```bash
npm run dev
```

## Path & Docs config

config 檔案: `src/.vuepress/config.js`

目前僅需變更
- themeConfig.nav
- themeConfig.sidebar

nav: Header 顯示的選單  
sidebar: 跟目錄結構的檔案要 mapping 到，key 即為一個文件區的 root path，Array item 內容為 sidebar 的內容


## CI/CD

使用 github actions 發布到 github pages

目前觸發條件為 master branch pushed，若最新的 commit message 包含 `skip ci` 則不觸發

