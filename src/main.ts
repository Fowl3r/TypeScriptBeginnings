// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];


type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
};

type UserId = stringOrNumber; 

type PostId = stringOrNumber; 

// Literal Types

let myName: 'Tom';

let userName: 'Tom' | 'John' | 'Amy';

userName = 'Amy';

// functions
const add = (a:number , b:number): number => {
    return a + b
}

// any function that does not return anything should be type void
const logMsg = (message: any) => {
    console.log(message);
}

logMsg('Hello');
logMsg(add(2,3));

let subtract = function (c: number, d:number) :number {
    return c - d;
}

type mathFunction = (a:number, b:number) => number ; 
// interface mathFunction {
//     (a:number, b:number) : number ; 
// } 

let multiply: mathFunction = function (c,d) {
    return c * d;
}

logMsg(multiply( 2, 2));

// optional params - must be last in list, required params must be first
const addAll = (a:number, b: number, c?:number):number => {
    // type guard
    if (typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b; 
}

// default value, does not need to be last in line
const sumAll = (a:number = 10, b: number, c:number = 2):number => {
        return a + b + c;
}

logMsg(addAll(2,3,2));
logMsg(addAll(2,3));
// must explicitly say undefined to use default values at front param positions
logMsg(sumAll(undefined,3));

// Rest params ...rest/spread operator using the rest of the params or spreading out the rest of the params, if used with other params must be the last one
const total = (a:number, ...nums: number[]):number => {
    return a +  nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,4))

// Never type
const createError = (errMsg: string) => {
    throw new Error(errMsg);
}



