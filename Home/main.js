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