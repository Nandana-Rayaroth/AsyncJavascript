// console.log("Start")
// function getDataFromAPI(){
//     setTimeout(() => {
//         return "Debug Media"
//     }, 3000)
// }
// console.log(getDataFromAPI())
// console.log("End")

// here getDataFromAPI is not returning any thing, first start placed at stack then getDataFromAPI is placed at stack but now nothing is returned it  return after 3 seconds but
// it is already added into stack so this cann't run again so the output still undefined. Call back is the solution of this problem .

// console.log("Start")
// function getDataFromAPI(funcall){
//     setTimeout(() => {
//         funcall("Debug Media")
//     }, 3000)
// }
// getDataFromAPI((value) => {
//     console.log(value)
// })
// console.log("End")

// here start placed at stack first then getDataAPi placed after that end added into stack but here setTimeout is queue after 3 seconds callback function added into stack and we get debug media
// here we didn't get undefined because we try to console the callback fucntion , if you here also try to console the getDataFromAPI  then our output will be 
// start Undefined End 
// if you try to console both of this function then out output will be 
// start undefined end debug Media


// callback hell ->  if we have more functions and all of them is connnected with each other then we want to add value of each function and get the total sum , for that our consoling function become very large and deep nested(callback hell) also it take
// more time for run because each of them take time then our callback hell take total sum of setTime of each function , To solve this problem we can simply use promise

// console.log("Start with callback hell, without promise")
// function getDataAPi1(cb1){
//     setTimeout(() => {
//         cb1(5)
//     }, 1000)
// }
// function getDataAPi2(cb2){
//     setTimeout(() => {
//         cb2(6)
//     }, 1000)
// }
// function getDataAPi3(cb3){
//     setTimeout(() => {
//         cb3(4)
//     }, 1000)
// }

// getDataAPi1((value1) => {
//     getDataAPi2((value2) => {
//         getDataAPi3((value3) => {
//             console.log(value1+value2+value3)
//         })
//     })
// })

// console.log("End of without promise")

// console.log("Start with Promise")
// function getDataAPi1(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num)
//         }, 1000)
//     })
// }

// function getDataAPi2(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num)
//         }, 1000)
//     })
// }

// function getDataAPi3(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num)
//         }, 1000)
//     })
// }

// getDataAPi1(5)
//     .then((response) => {
//         console.log(response)
//         return getDataAPi2(response + 5)
//     })
//     .then((response) => {
//         console.log(response)
//         return getDataAPi3(response + 5)
//     })
//     .then((response) => {
//         console.log(response)
//     })

// console.log("End")


// ## call back practies ##
// function greet(name, callback){
//     console.log("Hello" + name)
//     callback()
// }

// function sayGoodbye(){
//     console.log("Good bye!")
// }
// greet("Alice", sayGoodbye)

// function add(a, b, callback){
//     callback(a + b)
// }

// add(2, 3, function(result){
//     console.log("Result :", result)
// })

// setTimeout(() => {
//     console.log("1")
//     setTimeout(() => {
//         console.log("2")
//         setTimeout(() => {
//             console.log("3")
//         }, 500)
//     }, 500)
// }, 500)

// for(var i = 1; i <= 3; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 1000)
// }

// for(var i = 1; i <= 3; i++){
//     console.log(i)
// }

// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// function multipleByTwo(number, callback){
//     callback(number * 2)
// }

multipleByTwo(5, function(result) {
    multipleByTwo(result, function(result2){
        console.log(result2)
    })
})

