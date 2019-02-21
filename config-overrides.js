const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

/* config-overrides.js */
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        "@pages": resolve(__dirname, "src/pages"),
        "@utils": resolve(__dirname, "src/utils"),
        "@components": resolve(__dirname, "src/components"),
    })
);