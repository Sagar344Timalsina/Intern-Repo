const arr=[1,2,3,4,5,6];


const response=arr.filter((isEven)=>{
    return isEven%2==0
})
console.log(response)



const data4=[
    {id:1,firstname:"Ram", lastname:"Shrestha",age:25},
    {id:2,firstname:"Sam", lastname:"Khanal",age:45},
    {id:3,firstname:"Sim", lastname:"Khatri",age:25}
];


//Firstname of all the people whose age is greater than 30
const rrr=data4.filter(x=> x.age>30).map(x=>x.firstname);
console.log(rrr);