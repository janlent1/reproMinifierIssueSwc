const swc = require("@swc/core");
const fs = require("fs");
const input = fs.readFileSync("./brokencodesmallSmallestRepro.js",{ encoding: 'utf8', flag: 'r' });
const {code, map} = swc.minifySync(input,{"compress":{"ecma":2015},"module":false,"ecma":2015,"mangle":true, "sourceMap": undefined});

fs.writeFileSync('./outputMinifiedCodeBroken.js', code);