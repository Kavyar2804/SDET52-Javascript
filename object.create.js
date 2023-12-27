let productdetails ={
        pname : 'Mobile',
        price: 25000,
        brand: 'samsung',
        cartdetails :function () 
        {
        console.log(`Product availabel in cart is as follows ${this.pname} ${this.price} ${this.brand}`);   
        }
}
let product2 = Object.create(productdetails)
console.log(product2);
product2.pname='Laptop'
product2.price=50000
product2.brand='HP'
product2.cartdetails=function () {
    console.log('New implementation'); 
}
console.log(product2);
product2.cartdetails()








