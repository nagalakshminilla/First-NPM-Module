const boxen = require('boxen');

const message = "I am using my first external module!";
const title = "Hurray!!!";

const classicBox = boxen(message, {
    title: title,
    titleAlignment: 'center',
    borderStyle: 'classic',
    padding: 1,
    margin: 1
});

console.log("1. Classic Style:");
console.log(classicBox);

const singleDoubleBox = boxen(message, {
    title: title,
    titleAlignment: 'center',
    borderStyle: 'singleDouble',
    padding: 1,
    margin: 1
});

console.log("\n2. SingleDouble Style:");
console.log(singleDoubleBox);

console.log("\n3. Round Style:");

console.log(boxen('unicorns love rainbows', {title: title, titleAlignment: 'center'}));

