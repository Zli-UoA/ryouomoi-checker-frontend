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

`.git_hooks/` ディレクトリを Git フックディレクトリ として扱う  
※`.git_hooks/` とはいえ実行権限与えないと動かないので注意

面倒であればローカルのこのリポジトリ上で以下のコマンドをコピペして 1 回実行すれば OK

```bash
# .git_hooks を .git/hooks の代わりに認識
git config --local core.hooksPath .git_hooks

# 実行権限を付与
chmod a+x .git_hooks/*
```