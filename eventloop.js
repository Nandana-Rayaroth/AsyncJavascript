// console.log("Running 1")

// setTimeout(() => {
//     console.log("Running 2")
// }, 5000)

// console.log("Running 3")

// here first placed asynchronous operations into queue and placed synchronous operations into stack then event loop check the stck is cleared or not if the all 
// operations of stack is exuted and cleared then event loop added the asynchronous operation into stack

console.log("Running 1")
setTimeout(() => {
    console.log("Running 2")
}, 0)
console.log("Running 3")
// here is also happening the same if you didn't enter any second for timeout or set 0 is same because setTimeout is asynchronous so remaining part is placed at stack and asynchrounos part is placed on queue 