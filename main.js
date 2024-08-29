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
    drawProductInModal();
    priceModal.innerHTML = `$125 x${userInputNumber} <span>$${userInputNumber*125}.00</span>`;
    
});

//!Click en el cart y se muestra modal con detalle
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__chekout-container');


cartIconBtn.addEventListener('click' ,() =>{
   // cartModal.style.display = 'block'; //muestra el modal al hacer click...sass esta en display none
   cartModal.classList.toggle('show'); //clase show recordar que esta en style.scss
   priceModal.innerHTML = `$125 x${userInputNumber} <span>$${userInputNumber*125}.00</span>`;

   if(lastValue == 0){
    productContainer.innerHTML = '<p class="cart-empty" >Your cart is empty</p>';
   }else{
    drawProductInModal();
   }
});

//!Borrar cant de porductos de cart modal
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty" >Your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
});

}

//!Cambiar imagenes cuando se presiona botones flecha
const imageContainer = document.querySelector('.gallery__image-container');
const nextGalleryBtn = document.querySelector('.gallery__next');
const previusGalleyBtn = document.querySelector('.gallery__previus');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () =>{
    changeNextImage(imageContainer);
})

previusGalleyBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
});

//!Mostrar modal de img (desktop)
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click',() =>{
    if(window.innerWidth >= 1115){
        imagesModal.style.display = 'grid';
    }

});

closeModalBtn.addEventListener('click', () => {
    imagesModal.style.display = 'none';
});

//!Cambiar las imagenes thumnail (desktop)
let thumbnails = document.querySelectorAll('.gallery__thumnail')
thumbnails = [...thumbnails] //utilizando spread operator

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    });
});

//!Cambiar las imagenes thumnails (Modal)


let modalthumbnails = document.querySelectorAll('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
});

//!Cambiar con las flechas las img desde el modal
const nextModalBtn = document.querySelector('.modal-gallery__next');
const previusModalBtn = document.querySelector('.modal-gallery__previus');

nextModalBtn.addEventListener('click' , ()=>{
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click' , ()=>{
    changePreviusImage(modalImageContainer);

});


//!FUNSIONES (modal)
function drawProductInModal(){
    productContainer.innerHTML = `<div class="cart-modal__details-container">
          <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="icono modal thumnail 1">
          <div>
            <p class="cart-modal__product">Autum Limited Edition</p>
            <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
          </div>
          <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
    <button class="cart-modal__chekout">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125 x${userInputNumber} <span>$${userInputNumber*125}.00</span>`;
    
};

//!BTN CAMBIAR IMG
function changeNextImage(imgContainer){
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}

function changePreviusImage(imageContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;

}



