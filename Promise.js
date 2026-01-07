const promise1 = new Promise((resolve, reject) => {
    resolve(["Javascript", "Java"])
    // reject("API1 failed!")
})
const promise2 = new Promise((resolve, reject) => {
    // resolve(["React", "Angular"])
    reject("API failed!")
})

const allPromise = Promise.race([promise1, promise2])

allPromise
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

//  all() it runs only when all promises are resolved other wise catch block will be excuted.
// allSettled() it display the current status of evey promise as a single array object it contains status and value, basically used for independed api calls .If any of them rejected it show its status as reject and it value also.
// any() it runs a single promise after resolve, if any of one is resolved it only shows that first resolved promise's output only . if all of them is failed then it shows failed message other wise it does n't shows any failed message.
// race() it returns a single promise as soon as it fails or success. it displays only first promise's output if it is resolved or not.




// ### Practies ###
// Promise.resolve()
//     .then(() => {
//         throw new Error("Error occured")
//     })
//     .then(() => {
//         console.log("This will not run")
//     })
//     .catch(err =>{
//         console.log(err.message)
//     })

Promise.resolve()
.then(() => {
    console.log("P1")
    Promise.resolve().then(() => console.log("P2"))
})
.then(() => console.log("P3"))