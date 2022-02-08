// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러: 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!'); // 출력
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'k', age: 22, company: { name: 'home' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// count
function a() {
    console.count('a function');
}
a();
console.countReset('a function');
a();

// trace - debugging
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();
