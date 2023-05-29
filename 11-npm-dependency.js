// local dependency - use it only in this particular project
// npm i <packageName>
//npm uninstall <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//npm uninstall -g <packageName>
//sudo npm install -g <packageName> (mac)
//sudo npm uninstall -g <packageName> (mac)

//package.json - mainfest file (stores importent info about project/package)

//To create package.json file

// 1) manual approach (create package.json in the root, create properties etc)
// 2) npm init (step by step, press enter to skip)
// 3) npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
