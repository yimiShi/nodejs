let express = require('express')
let db = require('./db')
let userModel = require('./model/users')

const PORT = 3000
let app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


db
  .then(() => {
    // register router
    app.post('/register', async (request, response) => {

      // 1.获取用户的输入
      let userInput = request.body
      let {email, username, password} = userInput

      //2. 校验是否符合格式要求
      let emailReg = /^[a-zA-Z0-9_]{5,16}@[a-zA-Z0-9]{2,5}\.com$/
      let usernameReg = /[a-zA-Z0-9]{5,16}/
      let passwordReg = /[a-zA-Z0-9_@.]{6,20}/

      if (!emailReg.test(userInput['email'].trim())) {
        response.send('邮箱输入不合法')
      } else if (!usernameReg.test(userInput['username'])) {
        response.send('用户名输入不合法')
      } else if (!passwordReg.test(userInput['password'])) {
        response.send('password输入不合法')
      } else if (userInput['password'] !== userInput['re_password']) {
        response.send('password不一致')
      }

      // 3. 去数据库中查看是否已经注册过
      try {
        let findResult = await userModel.findOne({email: userInput['email']})
        if (findResult) {
          response.send(`${userInput['email']} 邮箱已经注册过, 不能重复注册`)
        } else {
          await userModel.create({email, username, password})
          response.send('注册ok')
        }
      } catch(err) {
        console.log(err);
        response.send('当前网络不稳定, 请稍后再试...')
      }

    })

    app.get('/register', (request, response)=> {
      response.sendFile(__dirname + '/public/register.html')
    })

    // 登录
    app.post('/login', async (request, response) => {
      let emailReg = /^[a-zA-Z0-9_]{5,16}@[a-zA-Z0-9]{2,5}\.com$/
      let passwordReg = /[a-zA-Z0-9_@.]{6,20}/

      let {email, password} =  request.body
      if (!emailReg.test(email)) {
        response.send('邮箱不合法')
        return
      } else if (!passwordReg.test(password)) {
        response.send('密码格式错误')
        return
      }

      let result = userModel.findOne({email, password})
      if(result){
        console.log(`邮箱为 ${email} 的用户登陆成功`)
        response.send('登陆成功')
      }else {
        console.log(`邮箱为 ${email} 的用户登录失败`)
        response.send('登录失败, 邮箱或密码错误')
      }
    })

    app.get('/login', (request, response)=> {
      response.sendFile(__dirname + '/public/login.html')
    })
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(PORT, (err) => {
  if (!err) console.log(`服务器启动成功了, 端口号 ${PORT}`)
  else console.log(err)
})