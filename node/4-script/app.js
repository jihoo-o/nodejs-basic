const fs = require('fs').promises;

const photoDir = '../../photo/';
const imageDir = '../../image/';
const videoDir = '../../video/';

fs.readdir(photoDir)
    .then((files) => {
        files.forEach((file) => {
            // 조건별로 해당하는 폴더로 옮기기
            if (file.match(/(?:.JPG)$|(?:.jpeg)$/)) {
                // move to image
                fs.rename(`${photoDir}${file}`, `${imageDir}${file}`)
                    .then(() => console.log('done'))
                    .catch(console.error);
            } else if (file.match(/(?:.MOV)$|(?:.mp4)$/)) {
                // move to video
                fs.rename(`${photoDir}${file}`, `${videoDir}${file}`)
                    .then(() => console.log('done'))
                    .catch(console.error);
            }
        });
    })
    .catch(console.error);
