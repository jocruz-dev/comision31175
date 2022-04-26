/**
 * Sugar sintax
 */

// Operador ternario

const quieroCocinar = false
let cena = null;

if(quieroCocinar){
    cena = "pasta"
}else{
    cena = "pizza"
}

//console.log(cena)

cena = quieroCocinar ? "pasta" : "mariscos"


//console.log(cena)

////////////////////////////////

//  Spread operator

const DEFAULT_CONFIG = {
    test: true,
    test2: false,
    test3: "bar",
  };
  
  const USER_CONFIG = {
    otherTest: true, 
  }

  const config = Object.assign({}, DEFAULT_CONFIG, USER_CONFIG);

  //console.log(config)
  
  const configSpread = {...DEFAULT_CONFIG, ...USER_CONFIG};

  console.log(configSpread)

  //////////////////////////////////

  // Object Rest
//   let restOfKeys = Object.assign({}, config);
//   delete restOfKeys.test
//   delete restOfKeys.test2

  //console.log(restOfKeys)

  //const { test, test2, ...restOfKeys } = config;

  //console.log(test, test2, restOfKeys)


  //////////////////////

  // Deep matching

  const { test: deepMatch, test2, ...restOfKeys } = config;

  console.log(deepMatch)



