var x= 20;
let c='this is a company'
console.log(x);
console.log(c);
function hye(fname='manas',lname='panda'){
    return fname+" "+lname;
}
var c3=hye('sibu','pradhan');
console.log(c3);
console.log(hye());
c=()=>{
    return 'i am a arrow function'
}
console.log(c());
sum=(a,b)=>{
    return 'sum of two number is:'+(a+b);
}
console.log(sum(3,7));
function c1(){
    console.log("hello");
    return "hii";
}
console.log(c1());
mul=(a,c)=>{
    return a*c;
}
console.log(mul(4,7));

//string()

let b1='sibu'
let b2='siba'
let sentence=`${b1} is a friend of ${b2}`
console.log(sentence);
console.log(b1.slice(2));
console.log(sentence.split(" "));
console.log(sentence.replace('is','are'));
console.log(sentence);
console.log(sentence.indexOf('a'));//return first a
console.log(sentence.includes('friend'));
console.log(sentence.slice(-1));
 //looping through array

const arr=[1,5,7,8,2,3,4]
let cmp=(a,b)=>{
    return a-b;
}
arr.sort(cmp);
console.log(arr);
var a1=0;
 arr.forEach((value,index)=>{
    a1+=value+index;
})
console.log(a1);

const narr=[2,4,6,8,9,11,13,14,15,17]
for(let x of narr){
    console.log(x);
}
for(let x in narr){
    console.log(x);
}
//map()
let c2=narr.map((value,index)=>{
    console.log(value,index);
    return value+index;
})
console.log(c2);

//filter():filter an array with a value that passes a condition

let c4=narr.filter((value)=>{
    if(value%2==0){
        return value;
    }
})
console.log(narr);
console.log(c4);

//reduce(): reduce an array into single element
const carr=[1,2,3,4,5]
const hello=((h1,h2)=>{
    return h1*h2;
 })
 let res=carr.reduce(hello);
 console.log(res);

 let rs1=carr.map((value,index)=>{
    console.log(value,index);
    return value+index;
 })
 console.log(rs1);
 function fun1(a){
    fun =function fun2(b){
        return a+b;
    }
    return fun;
 }
 console.log(fun1(12)(313));
 