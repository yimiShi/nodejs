let http = require('http')
let queryString = require('querystring')

let server = http.createServer((request, response)=> {

  let a = request.url
  console.log(a)
  let param = a.split("?")
  let paramObj = queryString.parse(param)
  console.log(paramObj)


  response.setHeader("content-type","text/html;charset=utf-8")
  response.end("hello!一明大师兄")
})

server.listen(3000, (err)=> {
  if(!err)  console.log('启动成功')
  else console.log(err)
})