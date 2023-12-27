// //standard way of creation of object

// let persondetails =
// {
//     pname : 'abc',
//     age : 30,
//     phnno : [9999955666, 45668322363],
//     location : 'bangalore',
//     det : function() {
//         console.log('Person details' + " "+ this.pname + " " +this.location); 
//     },
//     spousedet:{
//         sname:"xyz",
//         age: 26
//     }
// }
// console.log(persondetails);
// console.log(persondetails.phnno[0]);
// persondetails.det()
// console.log(persondetails.spousedet.age);
// //adding a property
// persondetails.newprop = 'aaaa'
// //delete a property
// delete persondetails.location
// //modify
// persondetails.age=31

//object creation using constructor function
function det(name, age) {
    console.log(this);
    this.name=name
    this.age=age
}

let dt = new det('abc' , 30)
// console.log(dt);
// let dt1 = new det('xyz', 56)
// console.log(dt1);

//creating a prototype for an object
det.prototype.calcage =function () {
    console.log(this.age + 1);  
}
console.log(det.prototype);
console.log(dt.__proto__);

//objects created using constructor function can now use the calcage function can inherit
//any object will always have the access to the methods & properties from its prototype
dt.calcage()
//object creation using class
class detail
{
constructor(name, age)
{
    console.log(this);
    this.name=name
    this.age=age
}
}
let z = new detail('ddd' , 55)
console.log(z);

//using object constuctor or object keyword
let x = new Object()
x.pname='ddd'
x.age=32
console.log(x);


