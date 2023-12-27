class Person
{
    #pin = 5555
    get gpinno()
    {
        return this.#pin
    }
    set spinno(val)
    {
        this.#pin= val
    }
}

let p = new Person()
console.log(p.gpinno);
p.spinno=9999
console.log(p.gpinno);