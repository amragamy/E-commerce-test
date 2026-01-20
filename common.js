// Navbar Links
// let links = document.querySelectorAll(".link");
// links = Array.from(links);

// let active = document.querySelector('.active')

// links.forEach((ele)=>{
//    ele.addEventListener('click', ()=>{
//     ele.classList.add('active');
//     active.classList.remove('active');
//     active = ele;
//    });
// });



// menu & close of Navbar
let menu = document.getElementById('menu');
let close = document.getElementById('close');
let linksSmallScreen = document.getElementById('links');

menu.addEventListener('click', function (){
   linksSmallScreen.classList.add('appear-links');
});

close.addEventListener('click', function(){
   linksSmallScreen.classList.remove('appear-links');
});



// products & new-arrival-products
const productsImage = [
   "../img/products/f1.jpg",
   "../img/products/f2.jpg",
   "../img/products/f3.jpg",
   "../img/products/f4.jpg",
   "../img/products/f5.jpg",
   "../img/products/f6.jpg",
   "../img/products/f7.jpg",
   "../img/products/f8.jpg",
]

const newArrivalProductsImage = [
   "../img/products/n1.jpg",
   "../img/products/n2.jpg",
   "../img/products/n3.jpg",
   "../img/products/n4.jpg",
   "../img/products/n5.jpg",
   "../img/products/n6.jpg",
   "../img/products/n7.jpg",
   "../img/products/n8.jpg",
]

let Products = document.getElementById('products');
let newArrivalProducts = document.getElementById('new-arrival-products');

// Display Data
function displayData(arr, parent){
   let productsCards = "";
   for(let i = 0 ; i < arr.length ; ++i){
         productsCards += `
         <div class="product-card">
            <div class="image"><img src=${arr[i]} alt="product-img"/></div>
            <div class="info">
               <p>adidas</p>
               <h4>Cartoon Astronaut T-Shirts</h4>
               <div class="stars">
               <i class="fa-solid fa-star"></i>  
               <i class="fa-solid fa-star"></i>  
               <i class="fa-solid fa-star"></i>  
               <i class="fa-solid fa-star"></i>  
               <i class="fa-solid fa-star"></i>  
               </div>
               <div class="price"><span>$78</span></div>
               <div class="card-shopping"><i class="fa-solid fa-cart-shopping"></i></div>
            </div>
         </div> ` 
   }
   parent.innerHTML = productsCards;
}

displayData(productsImage, Products);
displayData(newArrivalProductsImage, newArrivalProducts);







