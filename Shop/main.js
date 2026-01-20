let productCard = document.getElementsByClassName('product-card');
productCard = Array.from(productCard);

productCard.forEach((ele) => {
    ele.addEventListener('click',function(event){
    localStorage.setItem('src',ele.firstElementChild.firstElementChild.src);
    window.location.href = 'productDetails.html'; 
    });
});


if (window.location.pathname.includes('productDetails.html')){
    let mainImage = document.getElementById('main-image');
    mainImage.src = localStorage.getItem('src');
    
    let smallImage = document.getElementsByClassName('small');
    
    smallImage = Array.from(smallImage);

    smallImage.forEach((ele)=>{
       ele.addEventListener('click', function(){
        mainImage.src = ele.firstElementChild.src;
       });
    });
}