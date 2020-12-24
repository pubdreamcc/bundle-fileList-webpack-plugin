module.exports = class LogSuccessPlugin {
  constructor (options) {
    this.options = options || {};
    this.msg = options.msg || '打包成功';
  }

  log (msg) {
    console.log(`**********${msg}**********`);
  }

  apply (compiler) {
    compiler.hooks.done.tap('LogSuccessPlugin', () => {
      this.log(this.msg);
    })
  }
}
