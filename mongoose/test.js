let db = require('./db')

let stuModel = require('./model/students')

;(async ()=>{
  await db

  let result = stuModel.find({name: 'lisi'})
  console.log(await result)

})()