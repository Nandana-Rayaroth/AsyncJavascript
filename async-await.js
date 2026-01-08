// async await is a syntatic sugar of javascript, it simplifies complecated promises

// const promise1 = new Promise((resolve, reject) => {
//     resolve(["Javascript", "Java"])
//     // reject("API failed!")
// });

// async function fetchData(){
//     try{
//     const response = await promise1
//     console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }
// fetchData()


// IIFE - immediately invoking function withh arrow it is only runs once
// (async () => {
//     const response = await promise1
//     console.log(response)
// })();


// ## Practice ##
// async function test() {
//   console.log("Start");
//   await Promise.resolve().then(() => console.log("P1"));
//   console.log("End");
//   console.log("This is the sample statement")
// }
// test();
// Promise.resolve().then(() => console.log("P2"));


// async function a() {
//     console.log("A")
//     await b()
//     console.log("C")
// }
// async function b() {
//     console.log("B")
// }

// a()
// console.log("D")

// async function loop(){
//     for(var i = 1; i <= 3; i++){
//         await Promise.resolve()
//         console.log(i)
//     }
// }

// loop()
// console.log("End")

// function getNumber(num){
//     return new Promise((resolve, reject) => {
//         if(num % 2 === 0) resolve(num)
//         else reject("Odd number")
//     })
// }

// async function test() {
//     try{
//         const a = await getNumber(2)
//         console.log(a)
//         const b = await getNumber(3)
//         console.log(b)
//     }
//     catch(err){
//         console.log("Error: ", err)
//     }
// }

// test()
// console.log("Finished")

// function task(num){
//     return new Promise((resolve, reject) => {
//         if(num > 0) resolve(num)
//         else reject("Number too low")
//     })
// }

// async function main(){
//     try{
//         const a = await task(1)
//         console.log("A" , a)
//         const b = await task(-1)
//         console.log("B", b)
//     }
//     catch(err){
//         console.log("Caught :", err)
//     }
// }
// main()
// console.log("Outside")

async function inner(){
    throw "Inner Error"
}

async function outer(){
    try{
        await inner()
        console.log("Inner done")
    }
    catch(err){
        console.log("Outer caught : ", err)
    }
}

outer()
console.log("Global log")