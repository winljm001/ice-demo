const { override } = require("customize-cra");

module.exports = override((config) => {
    console.log(config);
  return {
    ...config,
    output: {
      // 设置模块导出规范为 umd
      libraryTarget: "umd",
      // 可选，设置模块在 window 上暴露的名称
      library: "microApp",
    },
  };
});
