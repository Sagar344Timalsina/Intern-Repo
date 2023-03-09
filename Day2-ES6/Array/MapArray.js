
//Arrow Function with Map

const number=[1,2,3,4,5];

// return the value double of its number
const res=number.map((p)=>{
   return p*2;
})

console.log(res);
console.log(number);
//Map makes new array and change the value








const data=[
    {id:1,firstname:"Ram", lastname:"Shrestha",num:25},
    {id:2,firstname:"Sam", lastname:"Khanal",num:45},
    {id:3,firstname:"Sim", lastname:"Khatri",num:23}
];
let sum=0;
const data2=data.map((pro)=>
 (pro.firstname+" "+pro.lastname) 
)
console.log(data2);