//"use strict"
var c1
  c1=34
console.log(c1);
//regular Exp
let text="visit W3school oolschool w3school"
let n=text.search(/w3school/i);
console.log(n);
res=text.search(/ool\b/);
console.log(res);
res1=text.search(/\d/g)
console.log(res1);
//this
const person={
    fname:"hnn",
    lname:"panda",
    funame:function(gender)
    {
        return this.fname+" "+this.lname+"my gender is "+gender;
    }
};
const person1={
    fname:"hii",
    lname:"hello"
}
let x=person.funame.call(person1,"male");
console.log(x);
let y=person.funame.apply(person1,["male"]);
console.log(y);
let z=person.funame.bind(person1,"male");
console.log(z());

//classes

class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(dt){
        return dt-this.year;
    }
}
let obj1=new car("ford",2017);
let d=new Date();
var yr=d.getFullYear()
console.log(obj1.age(yr));
//getter and setter method
var p2={
    name:"manas",
    age:45,
    // get uppercase(){
    //     return this.name.toUpperCase();
    // },
    set setname(nam){
        this.name=nam;
    }
};
console.log(p2);

