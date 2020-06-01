/*
 *
 *
 * */

// console.log(arguments.callee.toString())
console.log(__filename)
console.log(__dirname)

function demo(a, b) {
  console.log(1)
  console.log(1)
  console.log(arguments.callee.toString())
  return 1

}
// demo()