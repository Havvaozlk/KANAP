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
