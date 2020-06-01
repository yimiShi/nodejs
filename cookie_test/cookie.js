let express = require('express')
let cookieParser = require('cookie-parser')

let app = express()
app.use(cookieParser())


app.get('/set', (req, res) => {
  // 设置cookie
  res.cookie('demo', '123', {maxAge: 1000 * 20})
  res.send('hello')
})

app.get('/get', (req, res) => {
  console.log(req.cookies);
  res.send('ok')
})

app.get('/delete', (req, res) => {
  // method 1
  res.cookie('demo', 123, {maxAge: 0})

  //method2
  res.clearCookie('demo')
})


app.listen(3000, (err) => {
  if (!err) console.log('服务器启动正常')
  else console.log(err);
})