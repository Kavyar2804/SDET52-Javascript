class Person 
{
    a = 4 //variable
    static b =6 //static variable
    constructor(fname,lname)
    {
        this.fname=fname
        this.lname=lname
    }
    static details() //static method
    {
        let p1 = new Person()
        console.log(` Static variable ${Person.b} ${this.b} 
        Non static variable ${p1.a}`);
    }
    familydetails() //non static method
    {
        let p = new Person()
        console.log(`Static ${Person.b} Non static ${p.a} ${this.a} 
        Constructor values ${this.fname} ${this.lname}`);
    }
}
// //static
// Person.details()
// //non static
// let p = new Person('Abc' , 'xyz')
// p.familydetails()
// console.log(p.fname);
// console.log(p.lname);
// class Student extends Person
// {
//     constructor(fname,lname,age)
//     {
//         super(fname,lname) 
//         this.age=age
//     }
//     sample()
//     {
//         console.log(`${this.fname} ${this.lname} ${this.a} ${this.age} ${this.familydetails}`);
//     }
//     familydetails()  //overriding parent class method
//     {
//         super.familydetails() //parent class implementation
//         console.log(`New implementation`);
//     }
// }
    
// let d = new Student('anc', 'nn' , 30)
// d.sample()
// d.familydetails()

export default new Person()