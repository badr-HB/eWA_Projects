let add = 0;
function decraese() {
    const nomber = document.querySelector('.increase_dicrease');
    add--
    if (add == -1) {
        add = 0
    }
    else {
        nomber.innerHTML = `<span onclick="decraese()">-</span>${add}<span onclick="increase()">+</span>`
       
    }
    return add
}
function increase() {
    const nomber = document.querySelector('.increase_dicrease');
    add++
    if (add == -1) {
        add = 0
    }
    else {
        nomber.innerHTML = `<span onclick="decraese()">-</span>${add}<span onclick="increase()">+</span>`
        
    }
    return add
}

function changepic() {
    const display = document.querySelector('.header_image_section');
    display.innerHTML = `<img src="/examine-fine-d'anne/images/image-product-1.jpg" alt="" width="390px" height="420px"
                        class="shoe_img">`
}
function changepic1() {
    const display = document.querySelector('.header_image_section');
    display.innerHTML = `<img src="/examine-fine-d'anne/images/image-product-2.jpg" alt="" width="390px" height="420px"
                        class="shoe_img">`
}
function changepic2() {
    const display = document.querySelector('.header_image_section');
    display.innerHTML = `<img src="/examine-fine-d'anne/images/image-product-3.jpg" alt="" width="390px" height="420px"
                        class="shoe_img">`
}
function changepic3() {
    const display = document.querySelector('.header_image_section');
    display.innerHTML = `<img src="/examine-fine-d'anne/images/image-product-4.jpg" alt="" width="390px" height="420px"
                        class="shoe_img">`
}
let affiche = true;
function cart() {
    if (affiche) {
        document.getElementById('cart').style.display = 'block';
        affiche = false
    }
    else {
        document.getElementById('cart').style.display = 'none';
        affiche = true
    }
}
let results = increase();
function buyproduct() {

    let fresults = results * 125;
    const cart = document.getElementById('cart');
    cart.innerHTML = `<p>Cart</p>
            <hr>
            <p>Fall Limited Edition Sneakers </p>
            <p>$125.00 x ${results} $${fresults}</p>
            <button>Chekout</button>`
}