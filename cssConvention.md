# CSS 規則

基本的にBEMに則る

## キャメル

`blockName__elementName--modifier_value`

## blockについて

component 一個を block とする

block 一個に対しその名前の css(scss) ファイルを作成、適応する

## elementをネストしない

## シングルクラス

基本的にシングルクラスのみ

汎用modifierを追加で付加することのみを許可する。

## 親ブロックのelementを子ブロックの中においてはいけない

以下の様なものを許可しない

```html
<div class="blockA">
  <div class="blockB">
    <div class="blockA__element">
    </div>
  </div>
</div>
```

## 汎用modifier

- bg
  - brimary
    - `bg_primary`
    - `bg_primarySolid`
    - `bg_primarySolidThin`
  - secondary
    - `bg_secondary`
    - `bg_secondarySolid`
  - white
    - `bg_white`
    - `bg_white-a20`
    - `bg_white-a40`

- color
  - brimary
    - `color_primary`
    - `color_primarySolid`
    - `color_primarySolidThin`
  - secondary
    - `color_secondary`
    - `color_secondarySolid`
  - white
    - `color_white`
    - `color_white-a20`(必要かわからない)
    - `color_white-a40`(必要かわからない)

- shadow
  - 汎用にする必要はなさそう

- margin
  - `mg_{top, right, bottom, left}-4`
  - `mg_{top, right, bottom, left}-8`
  - `mg_{top, right, bottom, left}-16`
  - `mg_{top, right, bottom, left}-24`
  - `mg_{top, right, bottom, left}-32`
  - `mg_{top, right, bottom, left}-40`
  - `mg_{top, right, bottom, left}-48`
  - `mg_{top, right, bottom, left}-56`
  - `mg_{top, right, bottom, left}-64`
  - `mg_{top, right, bottom, left}-72`
  - `mg_{top, right, bottom, left}-80`
  - `mg_{top, right, bottom, left}-88`
  - `mg_{top, right, bottom, left}-120`
