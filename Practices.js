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

console.log("A");

setTimeout(() => console.log("B"), 0);

(async () => {
  console.log("C");
  await Promise.resolve();
  console.log("D");
})();

Promise.resolve().then(() => console.log("E"));

console.log("F");



