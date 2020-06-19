const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const outputPath = path.resolve(__dirname, "..", 'dist');

module.exports = merge(commonConfig, {
    mode: 'production',
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    plugins: [
       
    ]
});
