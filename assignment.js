// // y();
// // //console.log(z);
// // //const z=20;
// // function y()
// // {
// //     var x=10
// //     console.log(x);
// // }
// // //console.log(x);
// // function funame(){
// //     //body
// // }
// const arr=[1,2,3,4,5];

// let res=arr.map((value)=>{
//     return value*value*value;    
// })
// console.log(res);
// let res1=arr.filter((value)=>{
//     if(value%2==0){
//         return value;
//     }
// })
// console.log(res1);
// let res3=arr.reduce((v1,v2)=>{
//     return v1+v2;
// })
// console.log(res3);
// const obj1={
//     fname:"manas",
//     lname:"panda",
//     fullname:function(age)
//     {
//         return this.fname+" "+this.lname+"my age:"+age;
//     }
// }
// const obj2={
//     fname:"arbind",
//     lname:"panda"
// }
// let res4=obj1.fullname.bind(obj2,23);
// console.log(res4);

// console.log(Math.pow(2,8));

console.log(x);
var x=10;
console.log(x);
//function statement 
function fname(){

}
//funcion expression
let re= function f1(){

};
//function call
fname();
//callback function
function f12(sum){
    console.log(sum);
}

function f11(a,b,f12){
    sum=a+b
    f12(sum);
}
f11(3,4,f12);///f12 is a call back function
//function currying
function som(a) {
    return (b, c) => {
        return a * b * c
    }
}
let x1=som(10)(2,4);
console.log(x1);