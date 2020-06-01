db.getCollection("teachers").find({})

db.teachers.find({"name": "liwi"})
db.teachers.remove()
db.teachers.insert({"name":"zhangsan1", "age":"18","sex":"male"})
db.teachers.insert({"name":"zhangsan2", "age":"25","sex":"male"})
db.teachers.insert({"name":"zhangsan3", "age":"16","sex":"female"})
db.teachers.insert({"name":"lisi", "age":"20","sex":"male"})
db.teachers.find({$or:[{age: "18"}, {age: "25"}]})

db.teachers.find({age:{$lt:"20"}})
db.teachers.find({name: /^zhang/})


db.students.find({$where:function(){
   return this.name == 'zhangsan1'
}})


db.teachers.find({}, {name:1})

db.teachers.find({sex: "male"})

db.teachers.update({name: "zhangsan1"}, {age: 19})

db.teachers.update({name: "zhangsan2"}, {$set:{age: 19}})

db.teachers.updateOne({name:"zhangsan3"}, {$set: {age: 23}})\\\


db.teachers.remove({name: "zhangsan2"})