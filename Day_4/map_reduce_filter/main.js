// map()
const prod = [
    { name: "Mobile", price: 28000, category: "Electronics" },
    { name: "Dress", price: 5000, category: "Fashion" },
    { name: "Table", price: 10000, category: "Furniture" }
  ];
  
  const uppercaseNames = prod.map(product => product.name.toUpperCase());
  console.log(uppercaseNames); 
  console.log("---------------------------------------------------------------------")
  
//filter
const elecProduct = prod.filter(product => product.category === "Electronics");
console.log(elecProduct);
console.log("---------------------------------------------------------------------")

// reduce()
const totalPrice = prod.reduce((total, product) => total + product.price, 0);
console.log(totalPrice); 
console.log("---------------------------------------------------------------------")

//combine- map()+filter()+reduce()
function totalPriceProd(prod, category) {
    return prod
      .filter(res => res.category === category)  
      .map(res => res.price)                     
      .reduce((total, price) => total + price, 0);       
  }
console.log(totalPriceProd(prod, "Electronics")); 
  
