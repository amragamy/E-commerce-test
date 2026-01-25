if (localStorage.getItem("productData") != null) {
  // Read data from Local Storage
  let productData = JSON.parse(localStorage.getItem("productData"));

  // Element of total price value
  let totalPrice = document.getElementById('total');
  
  // Display data from Local Storage to Table
  function display() {
    let tbody = document.getElementById("tbody");
    let data = "";
    let totalPriceValue = 0;
    productData.forEach((ele, index) => {
      data += `
       <tr>
            <td><img src=${ele.imageSrc} alt=""></td>
            <td class="collapse">Carton Astronat T-Shirts</td>
            <td>${ele.size}</td>
            <td class="collapse">78$</td>
            <td><input type="number" min="0" max="10" value=${ele.quantity} onInput="handleQuantity(event, ${index})"></td>
            <td>${ele.quantity * 78}$</td>
            <td><i class="fa-solid fa-trash" onClick="removeProduct(${index})"></i></td>
        </tr>
       `;
       totalPriceValue += ele.quantity * 78;
    });

    tbody.innerHTML = data;
    totalPrice.innerText = totalPriceValue;
  }

  display();

  // Remove product from cart
  function removeProduct(index) {
    productData.splice(index,1);
    applyCahnges();
    display();
  }

  // Handle total price when change quantity 
  function handleQuantity(event, index){
    productData.map((ele, i)=>{
      if(index == i){
        ele.quantity = event.target.value > 0 && event.target.value <= 10 ? event.target.value : 1;
        return ele;
      }
    }) 

    applyCahnges();
    display();
  }



  // Apply changes to Local Storage
  function applyCahnges(){
    localStorage.setItem("productData", JSON.stringify([...productData]));
  }
}