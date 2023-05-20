"use strict";
// Literal Types
let myName;
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
// any function that does not return anything should be type void
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a:number, b:number) : number ; 
// } 
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional params - must be last in list, required params must be first
const addAll = (a, b, c) => {
    // type guard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default value, does not need to be last in line
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
// must explicitly say undefined to use default values at front param positions
logMsg(sumAll(undefined, 3));
// Rest params ...rest/spread operator using the rest of the params or spreading out the rest of the params, if used with other params must be the last one
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 4));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
