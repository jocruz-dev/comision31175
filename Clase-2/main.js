/**
 * Spread operator arrays
 */

const arr = [1,2,3,4]

const arrTest = ["a","b","c",...arr]

//console.log(arrTest)




/**
 * Spread Objetos
 */

const obj = {test: 1, test2:2}

const objTest = {...obj}

//console.log(objTest)




/**
 * Deconstruccion
 */

const a = [1,2,3,4,5,7,3,4,8,1]

// const uno = a[0]
// const dos = a[1]
// const tres = a[2]


const [uno, dos, tres] = a

//console.log(uno , dos , tres)

/**
 * Metodo includes
 */

const testInc = a.includes(9)

//console.log(testInc)


/**
 * 
 * Array find
 */

const arrFind = a.find((value)=>value>7)

console.log(arrFind)
