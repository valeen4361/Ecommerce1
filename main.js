//!Creacion variables para la cant de articulos elegidos por el usuario
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
})

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
})

//!Agrega al cart cuando se preciona el btn Add TO CART
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{    
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = userInputNumber; //lastValue
    cartNotification.style.display = 'block'; //para mostrar cant del carrito...sass esta con display none
});

//!Click en el cart y se muestra modal
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');

cartIconBtn.addEventListener('click' ,() =>{
   // cartModal.style.display = 'block'; //muestra el modal al hacer click...sass esta en display none

   cartModal.classList.toggle('show');
   priceModal.innerHTML = `$125 x${userInputNumber} <span>$${userInputNumber*125}.00</span>`;
});

//!Borrar cant de porductos de cart modal
const deleteProductBtn = document.querySelector('.cart-modal__delete');
