[![Actions Status](https://github.com/Zli-UoA/ryouomoi-checker-frontend/workflows/linter/badge.svg)](https://github.com/Zli-UoA/ryouomoi-checker-frontend/actions)

# 両想いチェッカーフロントエンド

## ブランチの命名規則

- feature ブランチ
  `feature/#issue番号-ブランチ名`
  example. `feature/#10-make-login`
- bug ブランチ
  `bug/#issue番号-ブランチ名`
  exmaple. `bug/#42-fix-layout`


## コミットメッセージの命名規則

- `#issue番号:コミットメッセージ`
  example. `#10:Update README.md`


## Git フックの設定

`.githooks/` ディレクトリを Git フックディレクトリ として扱う
※`.githooks/` とはいえ実行権限与えないと動かないので注意

面倒であればローカルのこのリポジトリ上で以下のコマンドをコピペして 1 回実行すれば OK

```bash
# .git_hooks を .git/hooks の代わりに認識
git config --local core.hooksPath .githooks

# 実行権限を付与
chmod a+x .githooks/*
```
## エンドポイント

- /home 好きな人が一覧で出てくる場所
- /tutorial 初期ページ
- /welcome 初期ログイン
- /search
  - /follow
  - /follower
  - /all
- /celebration
- /tolkroom
- /hakyoku
- /power-word(要検討)
- /lost-partner(候補:you-were-dumped)
