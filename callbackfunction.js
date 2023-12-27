//call back function
function add(a,b) {
    console.log(`The sum is ${a+b}`);
    
}
function sub(a,b) {
    console.log(`The difference is ${a-b}`);
}
//higher order function
function perform(data1 , data2 , callback1, callback2)
{

    callback1(data1,data2) //add(a,b)    
    setTimeout(() => {
        callback2(data1,data2)  //sub(a,b)
    }, 2000);
}
perform(9, 4, add , sub)