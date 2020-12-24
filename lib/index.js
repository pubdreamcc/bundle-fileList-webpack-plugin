class BundleFilelistWebpackPlugin {
  constructor (options) {
    this.options = options || {};
    this.fileName = options.filename || 'assetsFile.md';
  }

  apply (compiler) {
    compiler.hooks.emit.tapPromise('BundlefileListWebpackPlugin', (compilation) => {
      return new Promise(resolve => {
        // 找到打包后资源的文件数量
        let len = Object.keys(compilation.assets).length;
        // markdown 文件内容
        let content = `# 一共打包生成了${len}个文件\n\n`;
        for (let name in compilation.assets) {
          content += `* ${name}\n`;
        }
        // 将markdown 文件 写入 打包资源的目录
        compilation.assets[this.fileName] = {
          source: function () {
            return content;
          },
          size: function () {
            return content.length;
          }
        }
        resolve();
      });
    });
  }
}

module.exports = BundleFilelistWebpackPlugin;
