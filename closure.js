let newvar= 'hello'

function outer(a) {
    let count =0
    return function inner() {

        console.log(count++ + ' ' + newvar + " " + a);
    } 
}

//arfguments will also come under closure
let ret = outer(100)
ret()
ret()