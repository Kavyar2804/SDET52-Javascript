let tourisumpackage =
{
    pacakagename : 'indonaesia',
    fromdate : 'dec  30th 2023' ,
    todate : 'jan 2nd 2024',
    packagecost : 50000,
}

let packagedetails = function ( a , b) {

    console.log(`Package details are as follows ${this.pacakagename} ${this.fromdate} ${this.todate} and ${this.packagecost} 
    ${a+b}`); 
}
 

let tourisumpackage2 =
{
    pacakagename : 'singapur',
    fromdate : 'dec 1st 2023' ,
    todate : 'jan 9nd 2024',
    packagecost : 100000,
}

//CALL method

//tourisumpackage.packagedetails.call(tourisumpackage2)
packagedetails.call(tourisumpackage , 5 , 9)

//APPLY method
packagedetails.apply(tourisumpackage2,[10,5])

//bind method
let d = packagedetails.bind(tourisumpackage2)
console.log(d);
d(9,1)











// let pkg = tourisumpackage.packagedetails
// pkg()