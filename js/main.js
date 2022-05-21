//imports

import { getProduct } from "./services/products.js";


//events
window.addEventListener('load',()=> {init();});


function init() {
    console.log('Initializing document...');
    loadProduct();
    
}

//load product data

function loadProduct(){
    getProduct('1001').then( (response) => {
        if (response.status ==0 ){
            showProduct(response.product);
        }
    });
}



function showProduct(product){
    console.log('showing product info...');
    console.log(product);
    //show main photo
    if (typeof product.styles !== 'undefined'){
        console.log(product.styles);
        changeMainPhoto(product.styles[0]);
    }
    //show thumbnails
    product.styles.forEach(style => {
        //create img
        var img = document.createElement('img');
        //id
        img.className = 'child-thumbnail'
        //asign img source
        img.src = style.photo;
        //append image to thumbnail div
        document.getElementById('child-thumbnails-block').appendChild(img);
        //event 
        img.addEventListener('click', () =>{
            console.log(style);
        })

    })
}


//Change the data
function changeMainPhoto(style){
    console.log('Changing main photo...');
    if (typeof style.photo !== 'undefined'){
        document.getElementById('img-main').src = style.photo;
    }

   /* if (typeof style.name !== 'undefined'){
        document.getElementById('label').textContent = style.name;
    }*/

}


//Tarea
//Cuando selecciones una imagen se debe marcar de que está seleccionada, 
//Purchase product
