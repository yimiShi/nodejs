/*
* ui路由器 -- 登录与注册

* */
let {resolve} = require('path')
let {Router} = require('express')
let router = new Router()

router.get('/register', (request, response)=> {
  let url = resolve(__dirname, "../public/register.html")
  response.sendFile(url)
})

router.get('/login', (request, response)=> {
  let url = resolve(__dirname, '../public/login.html')
  response.sendFile(url)
})

module.exports = router
