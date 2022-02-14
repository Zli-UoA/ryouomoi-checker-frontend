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

`.git_hooks/` ディレクトリの中身をローカルの `.git/hooks/` 以下にコピーする

面倒であればローカルのこのリポジトリ上で以下のコマンドをコピペ

```bash
cp --force .git_hooks/* .git/hooks/
```