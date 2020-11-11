# pmt

![CircleCI](https://circleci.com/gh/FormulaPages/pmt.svg?style=shield&circle-token=:circle-token)

Calculate loan payment

## Syntax

```js
PMT(rate, periods, present, future = 0, type = 0)
```

## Install

```sh
npm install --save formula-pmt
```

## Usage

```
var pmt = require('formula-pmt');
// 100K at 5% for 360 periods
pmt( 0.05 / 12, 360, 100000 )
```
