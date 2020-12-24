# a webpack plugin that outputs webpack bundle assets to a markdown file

## Usage

1. install

```shell

npm install bundle-fileList-webpack-plugin --save-dev
```

2. in your webpack config file

```js

const BundlefileListWebpackPlugin = require('bundle-fileList-webpack-plugin');

// webpack config object

module.exports = {
  ...

  plugins: [
    ...
    new BundlefileListWebpackPlugin({
      // 生成的 markdow 文件名称（带上.md 扩展名）
      filename: 'myAssetsList.md'
    }),
    ...
  ],
  ...
}

```
