//import { printObject, genericFunction,genericFunctionA } from "./generics/generics";

import { getPokemon } from "./generics/get-pokemon";

//printObject(123);
//printObject('hi');
//printObject('<3');
//printObject(new Date());
//console.log(genericFunction(3.16));
//console.log(genericFunction('Nombre').toUpperCase)

//console.log(genericFunctionA(3.16));
//console.log(genericFunctionA('nombre').toUpperCase)
getPokemon(4)
    .then (resp =>console.log(resp))
    .catch(error=>console.error(error))
    .finally(()=>console.log('Fin de getPokemon'))
