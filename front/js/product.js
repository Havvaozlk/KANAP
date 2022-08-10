var str = window.location.href;
var url = new URL(str);
console.log(str);
var idProduct = url.search.substring(1);
console.log(idProduct);

let title = document.querySelector("#title");
let price = document.querySelector("#price");
let description = document.querySelector("#description");
let colors = document.querySelector("#colors");
let productImg = document.createElement('img');
document.querySelector('.item__img').appendChild(productImg);


async function getProduct() {
    await fetch("http://localhost:3000/api/products/" + idProduct)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return 0;
            }
        })
        .then((product) => {
            title.innerHTML = product.name;
            price.innerHTML = product.price;
            description.innerHTML = product.description;
            productImg.setAttribute('src', product.imageUrl);
            productImg.setAttribute('alt', product.altTxt);
            for (let i = 0; i < product.colors.length; i++) {
                let color = document.createElement("option");
                colors.appendChild(color);
                color.setAttribute("value", product.colors[i]);
                color.innerHTML = product.colors[i];
                console.log(product.colors[i]);
            }
        })
        .catch((error) => console.log("erreur :" + error));
}

getProduct();

//AJOUT AU PANIER
function addToCart() {
    let button = document.querySelector('#addToCart');
    let quantity = document.querySelector('#quantity');
    let id = idProduct;
    let img = productImg.src;

    button.addEventListener('click', () => {
        if (quantity.value > 0 && quantity.value < 100 && quantity.value != "") {
            const productAdded = {
                productName: title.textContent,
                productId: idProduct,
                productImg: productImg.src,
                productColor: colors.value,
                productQuantity: quantity.value,
                productPrice: price.textContent,
            }
            var storedProduct = JSON.stringify(productAdded);
            localStorage.setItem('product', storedProduct);
            console.log(localStorage);
            
        } else {
            console.log('erreur');
        }

    })
}
addToCart();