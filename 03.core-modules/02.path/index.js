const path = require('path');
console.log(__filename)
console.log(path.dirname(__filename));//Returns the directories of a path
console.log(path.basename(__filename));//Returns the last part of a path

console.log(path.extname(__filename));//	Returns the file extension of a path
console.log(path.parse(__filename));//Formats a path string into a path object

