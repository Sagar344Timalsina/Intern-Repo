////Block in JS is defined by {code inside}
////Multiple JS statement into a group


//we need it because to group the satement where JS expects a single statement
 

////Shadowing 
//we have var a inside a block in line 14 again declaring same variable
var a=233;
console.log("Var",a);// 223




//Example::
//if statement expects a single statement so we group the JS statement
if (true) true;
//Group like this
if (true) {
    //compound statement
    var a = 10;
    console.log(a);

}
//blocked var a shadow the global var a and modify the data
//because both were pointing at the same memory
console.log("After",a);// 10



////Blocked Scope
////What variables and functions can we access inside the block
{
    var d = 10;
    let b = 20;
    const c = 30;
    console.log("Inside", d);//10
    console.log("Inside", b); //20
    console.log("Inside", c); //30
}
////b and c are hoisted and are undefined in seperate memory scope 
//// while d is in global scope
//// cant access let and const outside the block

console.log("outside var",d); //10
// console.log("outside let",b);//undefined
// console.log("outside const",c);//undefined

////Now lets see for let
let b=100;
const c=200;
console.log("Outside the block let",b)//// 100 as the both b have separate memory
////Block b have block memory and outside b have seperate memory but not global
console.log("Outside the block const",c)

////we have 3 scope
////1.Global scope
////2.Seperate Memory Scope
////3. Block Scope

