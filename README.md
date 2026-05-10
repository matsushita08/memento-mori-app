# メメントモリアプリ

人生の残り時間を疑似体験し、大切な人への言葉を残すきっかけを作るスタンドアロンWebアプリです。

## ファイル構成

- `index.html`: 公開されるアプリ本体です。ReactをCDNとBabel Standaloneで読み込んでいます。
- `README.md`: GitHub上で表示される説明文です。
- `docs/scenario.md`: アプリのコンセプト、世界観、感情導線、演出案をまとめたシナリオ設計書です。

## 公開方法

このリポジトリはGitHub Pagesで公開します。

公開URL:

```text
https://matsushita08.github.io/memento-mori-app/
```

## 技術メモ

ビルド環境は不要です。`index.html` をブラウザで開くだけで動きます。

Reactは以下のCDNから読み込んでいます。

- React 18
- ReactDOM 18
- Babel Standalone
