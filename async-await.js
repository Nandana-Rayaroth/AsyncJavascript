// async await is a syntatic sugar of javascript, it simplifies complecated promises

const promise1 = new Promise((resolve, reject) => {
    resolve(["Javascript", "Java"])
    // reject("API failed!")
});

async function fetchData(){
    try{
    const response = await promise1
    console.log(response)
    }catch(error){
        console.log(error)
    }
}
fetchData()


// IIFE - immediately invoking function withh arrow it is only runs once
// (async () => {
//     const response = await promise1
//     console.log(response)
// })();