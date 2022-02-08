const fs = require('fs');

// ✨ buffer 단위로 데이터를 읽는 stream
const data = [];

/* const readStream = fs.createReadStream('./file.txt', {
    // stream 단위
    // highWaterMark: 8, // 64 kbytes by default
    // encoding: 'utf-8',
});

// 이벤트 리스너 등록
readStream.on('data', (chunk) => {
    data.push(chunk);
});
readStream.on('error', (error) => {
    console.error(error);
});
readStream.on('end', () => {
    console.log(data.join(''));
});
 */

// 체이닝
fs.createReadStream('./file.txt', {
    // stream 단위
    // highWaterMark: 8, // 64 kbytes by default
    // encoding: 'utf-8',
})
    .once('data', (chunk) => {
        console.log(chunk);
    })
    .on('data', (chunk) => {
        data.push(chunk);
    })
    .on('error', (error) => {
        console.error(error);
    })
    .on('end', () => {
        console.log(data.join(''));
    });
