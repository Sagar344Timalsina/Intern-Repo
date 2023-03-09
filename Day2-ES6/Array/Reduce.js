const ar=[1,7,3,9,5];
const output=ar.reduce((acc,curr)=>{
    return acc+=curr;
},0);

console.log(output);



////Find max

const out=ar.reduce((acc,curr)=>{
if(acc<curr)
    acc=curr
return acc

},0)
console.log(out)

const data3=[
    {id:1,firstname:"Ram", lastname:"Shrestha",age:25},
    {id:2,firstname:"Sam", lastname:"Khanal",age:45},
    {id:3,firstname:"Sim", lastname:"Khatri",age:25}
];

const r=data3.reduce((acc,curr)=>{
if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age];
}
else{
     acc[curr.age]=1;   
}
return acc
},{})
console.log(r);

//Firstname of all the people whose age is greater than 30
const users=[
    {id:1,firstname:"Ram", lastname:"Shrestha",age:25},
    {id:2,firstname:"Sam", lastname:"Khanal",age:45},
    {id:3,firstname:"Sim", lastname:"Khatri",age:25}
];

const a=users.reduce((acc,curr)=>{
if(curr.age>30){
    acc.push(curr.firstname);
}
return acc;
},[])
console.log(a);