let mongoose = require('mongoose')
mongoose.set("useCreateIndex", true)

let dbPromise = new Promise((resolve, reject) => {

  mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true,useUnifiedTopology: true})

  mongoose.connection.once('open', (error) => {
    if (!error) {
      resolve()
    } else {
      reject(error)
    }
  })

})

;
(async () => {
  await dbPromise

  let Schema = mongoose.Schema

  let stuSchema = new Schema({
    stu_id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    hobby: [
      String
    ],
    info: Schema.Types.Mixed,
    date: {
      type: Date,
      default: Date.now()
    },
    enable_flag: {
      type: String,
      default: "Y"
    }
  })

  let stuModel = mongoose.model('students', stuSchema)

  // stuModel.create({
  //   stu_id: '20200531',
  //   name: 'lisi',
  //   age: 20,
  //   sex: 'male',
  //   hobby: ['游戏', '足球', '篮球'],
  //   info: '技术好的人',
  //
  // }, (error, data) => {
  //   if (!error) {
  //     console.log('数据写入成功了', data)
  //   } else {
  //     console.log('数据写入失败', error)
  //   }
  // })

  // let result = stuModel.create({
  //   stu_id: '20200560103',
  //   name: 'zhaoliu',
  //   age: 20,
  //   sex: 'female',
  //   hobby: ['游戏', '足球', '篮球'],
  //   info: '技术好的人',
  // })
  // console.log(await result)

  // let result = stuModel.find({age:20}, {age: 1, name:1})

  // let result = stuModel.update({age: 25}, {sex: 'male'}, {multi: true})


  let result = stuModel.deleteOne({sex: 'female'})

  console.log(await result)

})()