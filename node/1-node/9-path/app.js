const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename)); // only filename
console.log(path.basename(__filename, '.js')); // except extension

// directory name
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse - split whole path
const parsed = path.parse(__filename);
console.log(parsed);

// to string
const str = path.format(parsed);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Uses/ -> ture
console.log('isAbsolute?', path.isAbsolute('../')); // false

// normalize - auto fix
console.log(path.normalize('./foler////sub'));

// join
console.log(__dirname + '/' + 'image'); // 운영체제 호환 💩
console.log(path.join(__dirname, 'image'));