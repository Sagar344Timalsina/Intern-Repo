// let a=10;
// {
//     var a=20;
//     console.log(a);//Already been defined
// }
//// cant shadow let inside the blok through var


////Its fine because var scope is inside the function only
let e=10;
function x(){
    var e=20;
    console.log("Inside function",e);//20
}
x();
//Same for Arrow Function too
