// RECUPERATION DES DONNEES DE L'API
fetch("http://localhost:3000/api/products")
.then((res) => {
    if (res.ok) {
        return res.json();
    }
})
.then((data) => {
    getProducts(data);
})
.catch((error) => {
    console.log(error);
})


//AFFICHAGE DES PRODUITS
function getProducts(data) {
    for (product of data) {
        let items = document.querySelector(".items");
        items.innerHTML += `<a href="./product.html?${product._id}">
        <article>
          <img src="${product.imageUrl}" alt="${product.altTxt}">
          <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
        </article>
      </a>`;
    }
}