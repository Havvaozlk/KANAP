// var str = window.location.href;
// var url = new URL(str);
// console.log(str);
// var idProduct = new URLSearchParams(url.search);
// console.log(idProduct);

//INSERER LE TITRE
let title = document.querySelector('#title');
title.innerHTML = product.name;

//INSERER LE PRIX
let price = document.querySelector('#price');
price.innerHTML = product.price;

//INSERER LA DESCRIPTION
let description = document.querySelector('#description');
description.innerHTML = product.description;

//INSERER LES COULEURS
let colors = document.querySelector('#colors');
for ( let i = 0; i < product.colors.lenght; i++) {
   let color = document.createElement('option');
   colors.appendChild(color);
   color.setAttribute('value', product.colors[i])
}



