let productCard = document.getElementsByClassName('product-card');
productCard = Array.from(productCard);

// going to Product Details page
productCard.forEach((ele) => {
    ele.addEventListener('click',function(event){
    localStorage.setItem('src',ele.firstElementChild.firstElementChild.src);
    window.location.href = 'productDetails.html'; 
    });
});


if (window.location.pathname.includes('productDetails.html')){
    // handle Product Details Page with Data
    let mainImage = document.getElementById('main-image');
    mainImage.src = localStorage.getItem('src');

    let selectedImage = document.getElementById('selected-image');
    selectedImage.src =  mainImage.src;
    
    let smallImage = document.getElementsByClassName('small');
    
    smallImage = Array.from(smallImage);

    smallImage.forEach((ele)=>{
       ele.addEventListener('click', function(){
        mainImage.src = ele.firstElementChild.src;
       });
    });



    // Pop-up
    let pop_up = document.getElementById('pop-up');

    // Add Data to Local Storage to display it in Cart Page
    let addCartButton = document.getElementById('add-to-cart');
    let sizeProduct = document.getElementById('size');
    let quantityProduct = document.getElementById('quantity');
    let singleProduct = {
      imageSrc: mainImage.src,
      size:"",
      quantity:"",
    };

    // localStorage.removeItem('productData')
    addCartButton.addEventListener('click', function(){
       // Pop-up
       pop_up.classList.add('appear-pop-up');
       setTimeout(function(){
          pop_up.classList.remove('appear-pop-up');
       },1500); 
        
       singleProduct.imageSrc =  mainImage.src;
       singleProduct.size = sizeProduct.value;
       singleProduct.quantity = quantityProduct.value;

       if(JSON.parse(localStorage.getItem('productData')) == null){
        localStorage.setItem('productData', JSON.stringify([{...singleProduct}]));
       } else{
        let localStorageData = JSON.parse(localStorage.getItem('productData'));
        localStorage.setItem('productData', JSON.stringify([...localStorageData,{...singleProduct}]));
       }
    });
}