
const searchfurniture = document.getElementById("search-furniture");

window.onload = getitems();
function getitems() {
  //   console.log(e);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "products.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      const products = JSON.parse(xhr.responseText);
      let output = "";
      products.forEach(function (product) {
        output += `<div class='main'>
        
        <div class="image-name">
               <span class="image"><img src="${product.image}"width="400" height="300"></span>
               <span  id="product-name" class="img-name">${product.name}</span>
               <span class="search-product">
               
               <i
               class="fas fa-search" onclick="window.location.href='Product.html?product=${product.name}'"
               
               
             ></i>
             
               </span>
          

                </div>`;
        document.getElementById(
          "getproducts"
        ).innerHTML = `<div class="row">${output}</div`;
      });
    }
  };
  xhr.send();
}
document
  .getElementById("search-furniture")
  .addEventListener("keydown", filterproducts);
function filterproducts(e) {
  const text = e.target.value.toLowerCase();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "products.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      const products = JSON.parse(xhr.responseText);
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(text)
      );
      let output = "";
      // console.log(filtered);
      filtered.forEach(function (product) {
        output += `<div class='main'>
        
        <div class="image-name">
               <span class="image"><img src="${product.image}"width="400" height="300"></span>
               <span  id="product-name" class="img-name">${product.name}</span>
               <span class="search-product">
               
               <i
               class="fas fa-search" onclick="window.location.href='Product.html?product=${product.name}'"
               
               
             ></i>
             
               </span>
          

                </div>`;
        document.getElementById("getproducts").innerHTML = `${output}`;
      });
    }
  };
  xhr.send();
}

// document.getElementById("search-product").addEventListener("click", getproducts);
// function getproducts(e){
//   console.log("get")
//   const xhr=new XMLHttpRequest()
//   xhr.open("GET", "product.json",true);
//   xhr.onreadystatechange= function(){
//     if(xhr.readyState ===4 && xhr.status===200){
//       console.log(xhr.response);
//       const products=JSON.parse(xhr.responseText)

//     }
//   }
//   xhr.send();
// }

/* <span  id="search-product"> */

//  <i
// class="fas fa-search" onclick="window.location.href='Product.html?product=${product.name}'"
//  ></i>
