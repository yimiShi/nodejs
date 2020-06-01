

//定义变量
const PORT = 27017
const DB_NAME = 'test'


let mongoose = require('mongoose')
mongoose.set("useCreateIndex", true)

let dbPromise = new Promise((resolve, reject) => {

  mongoose.connect(`mongodb://localhost:${PORT}/${DB_NAME}`, {useNewUrlParser: true,useUnifiedTopology: true})

  mongoose.connection.once('open', (error) => {
    if (!error) {
      console.log(`端口号为${PORT}的mongo数据库连接成功了`)
      resolve()
    } else {
      reject(error)
    }
  })
})

module.exports = dbPromise