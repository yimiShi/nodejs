// express模块
let express = require('express')


// 创建app应用对象
let app = express()

app.get('/meishi', (request, response) => {
  console.log(request.query)

  response.send('<h1>美食界面</h1>')
})

app.post('/post', (request, response) => {})


app.listen(3000, (err) => {
  if (!err) console.log('启动成功')
  else console.log(err)
})