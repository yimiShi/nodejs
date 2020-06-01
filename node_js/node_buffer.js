let str = "HELLO"

let buffer = Buffer.from(str)
console.log(buffer);

// let str1 = "123"
// let buffer1 = Buffer.from(str1)
// console.log(buffer1);

let buffer2 = Buffer.alloc(10)
buffer2[0] = '22222222222'
buffer2[1] = '22222222222'
console.log(buffer2);

// let buffer3 = Buffer.allocUnsafe(10)
// console.log(buffer3);