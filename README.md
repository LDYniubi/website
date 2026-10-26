# 静读

一个简单的中文在线小说阅读网站，BiUH Web Technologies 2026 期末项目。

网站目前包含三篇原创短篇小说：《灯塔守夜人》《雨夜书店》《云端邮差》。首页是书架，可以浏览书籍、查看简介、开始阅读；阅读页支持上一章/下一章、字号调节和浅色/暖色/深色主题切换；进度会自动保存到浏览器本地。

## 文件说明

- `index.html`：书架首页
- `book.html`：书籍详情页
- `read.html`：章节阅读页
- `toc.html`：章节目录页
- `about.html`：关于页面
- `css/style.css`：页面样式
- `js/app.js`：数据与交互逻辑
- `server.js`：本地预览服务器

## 本地运行

```bash
node server.js
```

然后浏览器打开 http://localhost:8080。

## 在线访问

https://ldyniubi.github.io/website/
