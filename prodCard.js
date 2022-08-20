'use strict'

const featuredItemsEl = document.querySelector('.featuredItems');
const pathToImages = 'images';
const pathToProductsImages = `${pathToImages}/featured`;

function prodGet(product) {
    return `
    <div class="featuredItem">

    <div class="featuredImgWrap">
        <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
        <div class="featuredImgDark">
            <button data-productId="${product.id}">
                <img src="${pathToImages}/cart.svg" alt="">
                Add to Cart
            </button>
        </div>
    </div>

    <div class="featuredData">
        <div class="featuredName">
            ${product.name}
        </div>
        <div class="featuredText">
            ${product.description}
        </div>
        <div class="featuredPrice">
            $${product.price}
        </div>
    </div>

</div>
    `
}

function insertProd(products, featuredItemsEl) {
    let prodPaste = '';
    for (let product of products) {
        prodPaste += prodGet(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', prodPaste);
}

function clickAddToCart() {
    const btnAdd = document.querySelectorAll('button[data-productId]');
    btnAdd.forEach(function (button) {
        button.addEventListener('click', addProduct);
    })
}

function addProduct(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductBasket(productId);
}

insertProd(products, featuredItemsEl);
clickAddToCart();


