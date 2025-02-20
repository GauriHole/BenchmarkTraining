let renderData = document.querySelector(".renderData");
let renderCart = document.querySelector(".renderCart");
let cartItem = document.querySelector(".cart-count");
let cartArr = [];

function updateCartUI() {
    renderCart.innerHTML = ""; 

    if (cartArr.length === 0) {
        let emptyMsg = document.createElement("p");
        emptyMsg.textContent = "Cart is Empty";
        emptyMsg.setAttribute("class", "empty-cart-msg");
        renderCart.appendChild(emptyMsg);
    } else {
        let cartTitle = document.createElement("h2");
        cartTitle.textContent = "Here's Your Cart";
        cartTitle.setAttribute("class", "cart-title");
        renderCart.appendChild(cartTitle);

        cartArr.forEach((item, index) => {
            let cartDiv = document.createElement("div");
            cartDiv.setAttribute("class", "cart-style");

            let cartImg = document.createElement("img");
            cartImg.setAttribute("src", item.m);
            cartImg.setAttribute("class", "cartImgElement");

            let cartTitle = document.createElement("p");
            cartTitle.textContent = item.p;

            let cartPrice = document.createElement("p");
            cartPrice.textContent = `$${item.r}`;
            cartPrice.setAttribute("class", "cart-price");

            let cartTrash = document.createElement("i");
            cartTrash.setAttribute("class", "fa-solid fa-trash");
            cartTrash.style.cursor = "pointer";
            cartTrash.addEventListener("click", () => removeFromCart(index));

            cartDiv.appendChild(cartImg);
            cartDiv.appendChild(cartTitle);
            cartDiv.appendChild(cartPrice);
            cartDiv.appendChild(cartTrash);
            renderCart.appendChild(cartDiv);
        });
    }

    cartItem.innerHTML = cartArr.length;
}

function addToCart(img, title, price) {
    cartArr.push({ m: img, p: title, r: price });
    alert("Product Successfully Added to Cart");
    updateCartUI();
}

function removeFromCart(index) {
    cartArr.splice(index, 1);
    alert("Item Removed Successfully...")
    updateCartUI();
}

async function getProd() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data.forEach((ele) => {
        let createImg = document.createElement("img");
        let createTitle = document.createElement("p");
        let createTitleBox = document.createTextNode(`${ele.title.slice(0, 35)}...`);
        let prodMainDiv = document.createElement("div");
        let createPrice = document.createElement("p");
        let createPriceBox = document.createTextNode(` Price : $${ele.price}`);
        let btnElement = document.createElement("button");
        let btnText = document.createTextNode("Add to Cart");

        createImg.setAttribute("src", ele.image);
        createImg.setAttribute("class", "myImages");
        prodMainDiv.setAttribute("class", "box-main");
        createPrice.setAttribute("class", "price-element");
        btnElement.setAttribute("class", "btn-element");

        createTitle.appendChild(createTitleBox);
        createPrice.appendChild(createPriceBox);
        createTitle.setAttribute("class", "productTitle");
        btnElement.appendChild(btnText);

        prodMainDiv.appendChild(createImg);
        prodMainDiv.appendChild(createTitle);
        prodMainDiv.appendChild(createPrice);
        prodMainDiv.appendChild(btnElement);
        renderData.appendChild(prodMainDiv);

        btnElement.addEventListener("click", () => addToCart(ele.image, ele.title, ele.price));
    });
}

document.addEventListener("DOMContentLoaded", function () {
    updateCartUI(); 
    getProd();
});
