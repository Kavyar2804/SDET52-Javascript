"use strict"
console.log(this);
function add(a) {
    console.log(this);

}
add()

let b =(a1)=>{
console.log(this);
}
b()
const details ={
    dname:'kavya',
    det:function (params) {
        console.log(this); //it will point to object because we are calling that function using the object
    }
}
details.det()

const nobj =
{
    age:50
}
nobj.det= details.det //copying the method from one object to another object known as method barrowing
nobj.det()
//this keyword will points to the object which is calling it