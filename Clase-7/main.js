// const task = new Promise((resolve, reject)=>{
//     const arr = [{id:123123, name:"test", description:"asdasa", stock:2}]

//     setTimeout(()=>{
//         resolve(arr)
//     },2000)
// })


// task.then((res)=>{
//     console.log(res)
// })

// const test = document.getElementById("label")

// console.log(task)

// task.then((res)=>{
//     console.log(res);
// }, (err)=>{
//     console.error(err)
// }).catch((err)=>{
//     console.error(err)
//     return "fallback"
// }).then((res)=>{
//     console.log(res);
// }).then((res)=>{
//     console.log(res);
// })


// const res = fetch("https://rickandmortyapi.com/api/character")

// res.then((res)=>{
//     return res.json()
// }).then((res)=>{
//     console.log(res)
// })


const arr = [1,2,3,4,5]
console.log(arr);

const arrMap = arr.map((value, index, arr)=>{
    return value + 1
})

console.log(arrMap);