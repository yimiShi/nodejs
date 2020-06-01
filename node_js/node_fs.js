// let fs = require('fs')
// fs.writeFile('a.txt', '中文测试', {
//   flag: 'a'
// }, (error) => {
//   if (!error) {
//     console.log('文件写入成功');

//   } else {
//     console.log(error);

//   }

// })


// let content = "今天天气很热啊"
// fs.writeFile('b.txt', content, {
//   flag: "a"
// }, (error) => {
//   if (!error) {
//     console.log('写入成功');

//   } else {
//     console.log(error);

//   }
// })

// let ws = fs.createWriteStream('demo.txt')

// ws.on('open', () => {
//   console.log('可选流打开了');

// })

// ws.on('close', () => {
//   console.log('可选流关闭了');

// })

// ws.write('happy\n')
// ws.write('happy1\n')
// ws.write('happy2\n')

// ws.close()
// ws.end()
// let ws1 = fs.createWriteStream('demo1.txt')
// ws1.on('open', () => {
//   console.log('open');

// })

// ws1.on('close', () => {
//   console.log('close');
// })
// ws1.write('aaaa\n')
// ws1.write('bbbb\n')
// ws1.write('cccc')
// ws1.close()

// let {
//   readFile,
//   writeFile
// } = require('fs')

// readFile('./b.txt', (err, data) => {
//   if (!err) {
//     // console.log(data.toString());
//     writeFile('c.txt', data, (err) => {
//       if (!err) {
//         console.log('文件写入成功');
//       } else {
//         console.log(err);
//       }
//     })


//   } else {
//     console.log(err);

//   }
// })


let fs = require('fs')

let rs = fs.createReadStream('b.txt', {
  highWaterMark: 1
})

let ws = fs.createWriteStream('d.txt')

rs.on('open', () => {
  console.log('可读流打开了 ');

})

rs.on('close', () => {
  console.log('可读流关闭了');

})

ws.on('open', () => {
  console.log('可写流打开了 ');

})

ws.on('close', () => {
  console.log('可写流关闭了');
  ws.end()
})

rs.on('data', (data) => {
  console.log(data.length, data);
  ws.write(data)
})