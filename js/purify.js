// purify.js
const purify = require("purify-css")
const htmlFiles = ['* .html'];
const cssFiles = ['* .css'];
const opts = {
    output: 'purified.css'
};
purify(index.html, style.css, opts, function(res) {
    log(res);
});