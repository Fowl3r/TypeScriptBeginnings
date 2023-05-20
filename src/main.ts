let stringArr = ['one', 'hey', 'Dave'];

let gutiars = ['strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'Tim';
stringArr.push('hey');

gutiars[0] = 1984;
gutiars.unshift('Jim');

let test = [];
let bands: string[] = [];
bands.push('MCR');

// Tuple
let myTuple: [string,number,boolean] = ['Dave', 9 , false];

let mixed = ['John', 1, false];

 myTuple[1] = 42 ;

//  Objects 
let myObj : object;
myObj = [];
console.log(typeof myObj)
myObj = bands ;
myObj = {};

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John';

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
};

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name:'jimmy',
    active: true,
    albums:['I','II','IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name?.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))

// ENUMS
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)