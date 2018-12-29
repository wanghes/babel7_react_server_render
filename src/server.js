//const md5File = require('md5-file');
const path = require('path');

// CSS styles will be imported on load and that complicates matters... ignore those bad boys!
const ignoreStyles = require('ignore-styles');
const register = ignoreStyles.default;

// We also want to ignore all image requests
// When running locally these will load from a standard import
// When running on the server, we want to load via their hashed version in the build folder
const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

// Override the default style ignorer, also modifying all image requests
register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
  if (!extensions.find(ext => filename.endsWith(ext))) {
    // If we find a style
    return ignoreStyles.noOp();
  } else {
    // If we find an image
    // const hash = md5File.sync(filename).slice(0, 8);
    const bn = path.basename(filename);

    mod.exports = `/dist/static/images/${bn}`;
  }
});

// We also want to ignore all image requests
// When running locally these will load from a standard import
// When running on the server, we want to load via their hashed version in the build folder
//const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];
//
// console.log(ignoreStyles.DEFAULT_EXTENSIONS);
require('@babel/polyfill');
require('@babel/register')({
    ignore: [/\/(build|node_modules)\//],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        'dynamic-import-node'
    ]
});

require('./setup-pro-server');
