// const arr=["manas",34,56,'panda'];
// arr[0]="mp"
// console.log(arr);
// console.log("hii");
// console.log("hello");
// console.log("welcome to javaScript")
// setTimeout((a=23,b=46) => {
//     console.log(a+b);
// }, 200);
// let obj1={
//     fname:"manas",
//     lname:"panda",
//     fulname:function(age){
//         return this.fname+" "+this.lname+"my age is:"+age;
//     }
// }
// let obj2={
//     fname:"pintu",
//     lname:"nayak",
// }
// let r=obj1.fulname.apply(obj2,[34]);
// console.log(r);
// let r1=obj1.fulname.call(obj2,34);
// console.log(r1);
// let r2=obj1.fulname.bind(obj2,34);
// console.log(r2());
// console.log(x);
// var x=1;
// console.log(x);
//    let fullname=function(fname,lname){
//         return fname+" "+lname;
//     }
// console.log(fullname("manas","panda"));
// console.log(fullname(4,7));
// console.log("madn");

const datas=[
    {name:"manas",Profesion:"Software Enginner"},
    {name:"piysh",Profesion:"Software Enginner"}
];
function getDatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=data.name+"\n";
        })
        console.log(output);
    },1000)
}
 /*using callback resolve issue
   function addDatas(newdata,callback){
        setTimeout(()=>{
           datas.push(newdata);
           callback();
       },2000)
    }
  getDatas(); it will pass as a call back function
 addDatas({name:"srikant",Profesion:"software Enginner"},getDatas);
 callback() will be called after it pushed data*/


/*how can we solve it by promise...
function addDatas(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            resolve();
            reject("Sorry this is not working");
        },2000)
    })
}
addDatas({name:"srikant",Profesion:"software Enginner"}).then(getDatas).catch(err=>console.log(err));
// then called if promise is resolve. 
//catch is called if promise is resolve.*/

//Async and await
//await is only valid with Async funtion

function addDatas(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            resolve();
            reject("Sorry this is not working");
        },2000)
    })
}
async function start(){
await addDatas({name:"srikant",Profesion:"software Enginner"});
      getDatas();
} 
start();
