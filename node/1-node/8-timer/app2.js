console.log('code1');
console.time('timeout 0');
setTimeout(() => {
    console.timeEnd('timeout 0'); // not 0
    console.log('setTimeout 0'); // 2
}, 0);

console.log('code2');
setImmediate(() => {
    console.log('setImmediage'); // 3
});

console.log('code3');
process.nextTick(() => {
    console.log('process.nextTick'); // 1
});
