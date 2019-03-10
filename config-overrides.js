const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const { resolve } = require('path');

/* config-overrides.js */
module.exports = override(
    // import antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // alias
    addWebpackAlias({
        "@pages": resolve(__dirname, "src/pages"),
        "@utils": resolve(__dirname, "src/utils"),
        "@components": resolve(__dirname, "src/components"),
        "@localRedux": resolve(__dirname, "src/redux"),
        "@localActions$": resolve(__dirname, "src/redux/actions/actionType.js"),
        "@fetch$": resolve(__dirname, 'src/utils/requests.js')
    })
);