// const fetchData = async (url) => {
//     try{
//         const response = await fetch(url)
//         const data = response.json()
//         console.log(data)
//         return data
//     }
//     catch(err){
//         console.log(err)
//         return err
//     }
// };
// const getDataAPi = async () =>{
//     const response = await fetchData("https://jsonplaceholder.typicode.com/todos/1")
//     console.log(response)
// }
// getDataAPi()

// Event - loop, micro task queue, macro task queue
// console.log("Start")

// setTimeout(() => {
//     console.log("Timeout")
// }, 0)

// Promise.resolve().then(() => {
//     console.log("Promise")
// })

// console.log("End")

// task2
// function getData(callback){
//     setTimeout(() => {
//         callback("Data received")
//     }, 1000)
// }

// getData((value) =>{
//     console.log(value)
// })

// task3
// setTimeout(() => {
//     console.log("Step 1")
//     setTimeout(() => {
//         console.log("Step 2")
//         setTimeout(() => {
//             console.log("Step 3")
//         }, 1000)
//     }, 1000)
// }, 1000)

// task 4
// function fetchUser(){
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             // resolved({name: "Nandana", role: "Developer"})
//             rejected("Oops Something wrong")
//         }, 1500)
//     })

// }
// fetchUser()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// task 6
// function getNumber(){
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(10), 1000)
//     }, 1000);
// }

// async function showNum(){
//     const response = await getNumber()
//     console.log(response)
// }
// showNum()

// task 7
// function overPromise(){
//     return new Promise((resolve, reject) =>{
//         // resolve("Login sucess")
//         reject("Login failed")
//     })
// }
// async function login(){
//     try{
//     const response = await overPromise()
//     console.log(response)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// login()

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// (async () => {
//   console.log("C");
//   await Promise.resolve();
//   console.log("D");
// })();

// Promise.resolve().then(() => console.log("E"));

// console.log("F");



// ## Practice
//  day 9
// Create a Promise that resolves with the message "Data loaded!" after 2 seconds. Then use .then() to log the message.

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data loaded!")
//   }, 2000)
// })

// promise1 .then((value) => console.log(value))

// Create a Promise that rejects after 1 second with the error "Network error". Handle it with .catch() to log the error message.
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Network error")
//   }, 1000)
// })

// promise2
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err))

// Create a Promise that resolves after 2 seconds with "Success". Use .finally() to log "Promise completed" after it's done (whether resolved or rejected).

// function getPromise(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success")
//     }, 2000)
//   })
// }

// async function AsyncRunner(){
//   try{
//     let result = await getPromise()
//     console.log(result)
//   }
//   catch(err){
//     console.log("Error : ", err)
//   }
//   finally{
//     console.log("Promise completed")
//   }
// }

// AsyncRunner()

// 4. Create a Promise that resolves with the number 5. Chain it to multiply the number by 2, then add 10, and finally log the result (should be 20).
// let promise4 = new Promise((resolve, reject) => {
//   resolve(5)
// })
// promise4
//   .then((value1) => {
//     return value1 * 2
//   })
//   .then((value2) => {
//     return value2 + 10
//   })
//   .then((value3) => {
//     console.log(value3)
//   })

//5. Create three function which returns a Promise. All functions need to be called in parallel.
// function one(){
//   return new Promise((resolve, reject) => {
//     resolve("First function")
//   })
// }
// function two(){
//   return new Promise((resolve, reject) => {
//     resolve("Second funciton")
//   })
// }
// function three(){
//   return new Promise((resolve, reject) => {
//     resolve("Third function")
//   })
// }

// let allPromise = Promise.all([one(), two(), three()])
// allPromise 
//   .then((result) => console.log(result))
//   .catch((err) => console.log("Error : ", err))

//6. Create a Promise which resolves in 3 seconds, after resolving log message "Login successful". Use async/await.

// function promiseGenerator(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Login successful");
//     }, 3000);
//   });
// }

// async function AsyncRunner(){
//   try{
//     let result = await promiseGenerator()
//     console.log(result)
//   }
//   catch(err) {
//     console.log("Error : ", err)
//   }
// }

// AsyncRunner()

// 7. Fetch data from two APIs sequentially:
//     1. https://jsonplaceholder.typicode.com/posts
//     2. https://jsonplaceholder.typicode.com/users
// Then merge both so that each post includes its author's name and email.
// Don't use libraries like axios — only fetch and async/await.


// async function fetchData(){
//   try{
//     const fetch1 = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const response1 = await fetch1.json()
    
//     const fetch2 = await fetch("https://jsonplaceholder.typicode.com/users")
//     const response2 = await fetch2.json()
//     let data = []
//     response1.map(user => {
//       let result = response2.find(item => item.id === user.userId)
//       data.push({...user, authorName : result.name, authorEmail : result.email})
//     })
//     console.log(data)
//   }
//   catch(err){
//     console.log("Error : ", err)
//   }
// }

// fetchData()

// day 18
// Write a function ParallelLimit(tasks, limit) where tasks is an array of functions that return Promises. Run only limit promises concurrently until all are resolved.
// Example:
// const tasks = [
//  () => fetch('/api/1'),
//  () => fetch('/api/2'),
//  () => fetch('/api/3')
// ];
// await ParallelLimit(tasks, 2);

// //////

// Write a function Pipe(...fns) that composes multiple functions left-to-right.
//  Example: const add5 = x => x + 5; 
// const multiply3 = x => x * 3; 
// const piped = Pipe(add5, multiply3); 
// piped(5); // → multiply3(add5(5)) → 30

// function Pipe(...fns){
//   return function(value){
//     let result = value
//     for(fn of fns){
//       result = fn(result)
//     }
//     return result
//   }
// }

// const multiply3 = x => x * 3
// const  add5 = x => x + 5
// const piped = Pipe(add5, multiply3)
// console.log(piped(5))

// Write a function Waterfall(tasks) that chains an array of async functions where each function's output is passed to the next one.
// Example:
// const add = async x => x + 2;
// const square = async x => x * x;
// await Waterfall([add, square])(2) → 16

// function Waterfall(tasks){
//   return async function(value){
//     let OpIp = value
//     for(let fn of tasks){
//       OpIp = await fn(OpIp)
//     }
//     return OpIp
//   }
// }
// const add = async x => x + 2
// const square = async x => x * x
// const output = await Waterfall([add, square])(2)
// console.log(output)

// Write a function MonitorLongRunningTasks(tasks, threshold, onSlowTask) that monitors async tasks and invokes onSlowTask(taskIndex, elapsedTime) for any task taking longer than threshold ms.

// async function MonitorLongRunningTasks(tasks, threshold, onSlowTask){
//   let results = []
//   for(let i = 0; i < tasks.length; i++){
//     let startTime = Date.now()
//     const result = await tasks[i]()
//     let endTime = Date.now()
//     const elapsedTime = endTime - startTime
//     if(elapsedTime > threshold){
//       onSlowTask(i, elapsedTime)
//     }
//     results.push(result)
//   }
//   return results
// }
// function onSlowTask(taskIndex, elapsedTime){
//   console.log(`Task ${taskIndex} this task is slow taken time is ${elapsedTime}`)
// }

// const tasks = [
//   () => new Promise(item => setTimeout(() => item("A"), 500)),
//   () => new Promise(item => setTimeout(() => item("B"), 1500)),
//   () => new Promise(item => setTimeout(() => item("C"), 800))
// ]

// await MonitorLongRunningTasks(tasks, 1000, onSlowTask)

// 3. Write a function TimeoutWrapper(fn, ms) that wraps any async function fn and rejects if it takes longer than ms.
// async function TimeoutWrapper(fn, ms){
//   let startTime = Date.now()
//   let result = await fn()
//   let endTime = Date.now()
//   let elapsedTime = endTime - startTime
//   if(elapsedTime > elapsedTime){
//     return new Promise((resolve, reject) => {
//       reject("It take more time")
//     })
//   }
// }

// let task = function(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolved Promise")
//     }, 2000)
//   })
// } 

// let responsce = await TimeoutWrapper(task, 1000)
// console.log(responsce)