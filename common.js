// Features
const featuresData = [
   {
      id: 1,
      img_path: "../img/features/f1.png",
      desc: "Free Shipping"
   },
   {
      id: 2,
      img_path: "../img/features/f2.png",
      desc: "Online Order"
   },
   {
      id: 3,
      img_path: "../img/features/f3.png",
      desc: "Save Money"
   },
   {
      id: 4,
      img_path: "../img/features/f4.png",
      desc: "Promotions"
   },
   {
      id: 5,
      img_path: "../img/features/f5.png",
      desc: "Happy Sell"
   },
   {
      id: 6,
      img_path: "../img/features/f6.png",
      desc: "F24/7 Support"
   },

]

let featuresParent = document.getElementById('features-parent');
if(featuresParent){
   let featuresChilds = "";
   for(let i = 0 ; i < featuresData.length ; ++i){
      featuresChilds += `
         <div class="features-child" id=${featuresData[i].id}>
            <div class="image"><img src=${featuresData[i].img_path} alt="img"></div>
            <div class="desc"><span>${featuresData[i].desc}</span></div>
         </div>
      `
   }
   featuresParent.innerHTML = featuresChilds;
}


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

if(Products){
  displayData(productsImage, Products);
}

if(newArrivalProducts){
  displayData(newArrivalProductsImage, newArrivalProducts);
}







