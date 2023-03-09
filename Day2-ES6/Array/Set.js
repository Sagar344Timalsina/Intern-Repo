const input=[1,2,-2,11,7,1]
const input1=[1,4,7,2,4,7]

//Second largest


const d=([...new Set(input1)].sort((a,b)=>a-b))
console.log(d[d.length-2])
