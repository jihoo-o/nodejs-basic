const fs = require('fs');
const os = require('os');
const path = require('path');

// 1. 사용자가 원하는 폴더의 이름을 받아온다
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'picture', folder);
if (!folder || !fs.existsSync(workingDir)) {
    console.error('Pease enter folder name in Pictures');
}

// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && mkdirSync(videoDir);
!fs.existsSync(capturedDir) && mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 파일별로 분류한다
fs.promises
    .readdir(workingDir) //
    .then(processFiles) //
    .catch(console.log);

function processFiles(files) {
    files.forEach((file) => {
        if (isVideoFile(file)) {
            move(file, videoDir);
        } else if (isCapturedFile(file)) {
            move(file, capturedDir);
        } else if (isDuplicatedFile(files, file)) {
            move(file, duplicatedDir);
        }
    });
}

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    return !!file.match(regExp);
}

function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    return !!file.match(regExp);
}

function isDuplicatedFile(files, file) {
    // IMG_로 시작하고 && IMG_E로 시작하는 편집본이 없는 경우
    if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }
    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find((f) => f.includes(edited));
    return !!found;
}

function move(file, targetDir) {
    console.if(`move ${path.basename(file)} to ${path.basename(targetDir)}`);
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    fs.promises
        .rename(oldPath, newPath) //
        .catch(console.error);
}

console.log();
