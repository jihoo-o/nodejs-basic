// Buffer
// Fixed-size chunk of memory
// array of integers, byte of data
const buf = Buffer.from('Hi');
console.log(buf); // unicode
console.log(buf[0]); // asciicode
console.log(buf.toString()); // utf-8 by default

// create
const buf2 = Buffer.alloc(2); // create + init
const buf3 = Buffer.allocUnsafe(2); // create, not init -> fast but unsafe
buf2[0] = 72;
buf2[1] = 105;

// copy
buf2.copy(buf3); // buf2 -> buf3

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
