const num=[1,2,3,4,5];
num.forEach((i,idx,arr)=>{
    console.log(`a[${idx}],${i}`);
})



const letters=['a','b','c','d','e','a','d','e','a'];
let count={};
letters.forEach((item)=>{
//  console.log(item);
if(count[item]){
    count[item]++;
}
else{
    count[item]=1;
}

})
console.log(count)