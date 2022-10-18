const _ = require('lodash');

const nestedArray = [1,[2,[3]]];
const flattenedArray = _.flattenDeep(nestedArray);
console.log(flattenedArray);