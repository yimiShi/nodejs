//引入
let mongoose = require('mongoose')

// 连接
mongoose.connect('mongodb://localhost:27017/test')


let dbPromise = new Promise((resolve, reject) => {

  // 绑定监听
  mongoose.connection.once('open', (error) => {
    if (!error) {
      console.log('绑定成功了');

      // 操作
      console.log("操作数据库...");
      resolve()


    } else {
      console.log("绑定失败");
      reject(erro)
    }
  })
})


// dbPpromise.then((data) => {
//   console.log('操作数据库代码');

// }, (error) => {})

// dbPpromise
// .then(() => {

// })
// .catch(() => {

// })

// async function demo() {
//   await dbPromise
//   console.log("操作数据库代码");

// }

// demo()
// ;
// (async () => {
//   await dbPromise
// })()

//第四种写法 IIFE
;
(async () => {
  await dbPromise

})()