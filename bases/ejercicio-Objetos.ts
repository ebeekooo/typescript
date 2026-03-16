(()=>{
    let ladybug:{name:string,age?:number,powers:string[],getName?:()=>string}={
        name:'Marinette',
        age:15,
        powers:['Amuleto','Reiniciar']
    }
ladybug={
    name:'Alya',
    age:15,
    powers:['ilusion','velocidad'],
    getName(){     
        return this.name;
    }
}
console.log(ladybug.getName?.())


})()