// let pro= new Promise((resolve,reject)=>{
//    // console.log("five")
//     resolve(2);
//     reject(3);
// })

// console.log("hello");
// console.log("one");
// /*setTimeout(()=>{
//     console.log("two");
//     setTimeout(()=>{
//         console.log("three")
//     },1000);
// },2000);*/
// console.log("four")
// pro.then((value)=>{
//     console.log(value);
// })
// let nam="manas";
// let ar=Array.from(nam);
// console.log(ar);
// ar.forEach((Element)=>{
//     console.log(Element);
// })
// for(let x in ar){
//     console.log(x);
// }
// for(let x of ar){
//     console.log(x);
// }
// let x=[2,4,6,7,8];
// let txt = x.map((value, index)=>{
//     console.log(value,index);
//     return value+index;
// })
// console.log(txt);
// let ttt= x.filter((value)=>{
//     if(value%2==0){
//         return value;
//     }
// })
// console.log(ttt)
// let t=10;
// let t1= x.reduce((h1,h2)=>{
//    t=0
//    //console.log(t);
// })
 t=1;
console.log(t);
{
    var t=2;
    console.log(t);
}
console.log(t);
//string
b1="manas"
b2="panda"
sent = `my name is :${b1} ${b2}`
console.log(sent);
//console.log(sent.concat("whyy"));
let n=[12,34,56,78,9]
console.log(n.join("--"));

//splice()

console.log(n.splice(22,3,520,52,34));
console.log(n);
//slice()

console.log(n.slice(2,4));
console.log(n.reverse());
let com=((a,b)=>{
    return a-b;
})
console.log(n.sort(com));

let pro1 = new Promise((resolve,reject)=>{
        resolve(2);
        reject(3);
})
pro1.then((value)=>{
    console.log(value);
})

//
const d =new Date();
console.log(d);
console.log(d.toUTCString());
console.log(d.toISOString());

//sets()
 const l= new Set([2,'a',3,'b']);
 l.add(5);
 l.add(7);
 console.log(l.size);
 let txt=""
// l.forEach((value)=>{
  //  txt+=value+"\n"
 //})
 console.log(txt);
 let m1=new Map([["mango",40],["orange",30]]);
 m1.set("nnn",45);
 console.log(m1.size);
 m1.forEach((value,key)=>{
    console.log(value,key);
 })
 let txt1=""
 for(x of m1.entries()){
    console.log(x);
 }