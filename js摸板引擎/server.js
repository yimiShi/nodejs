// express模块
let express = require('express')

// 创建app应用对象
let app = express()
// app.use(express.static('public'))

// 配置摸板引擎
app.set('view engine', 'ejs')
// 配置摸板文件夹
app.set('views', './views')


app.get('/', (request, response) => {

  // response.sendFile(__dirname, './public/index.html')
  // 用els渲染页面
  let data = [{name: 'zhangsan', age: 15},{name: 'lisi', age: 15}]
  response.render('index', {data})

})

app.listen(3000, (err) => {
  if (!err) console.log('启动成功')
  else console.log(err)
})
