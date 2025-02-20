const renderData = document.querySelector(".renderData") as HTMLDivElement;
const renderCart = document.querySelector(".renderCart") as HTMLDivElement;
interface CartItem {
    m: string;
    p: string;
    r: number;
}

const cartArr: CartItem[] = [];
const cartItem = document.querySelector(".cart-count") as HTMLElement ;

function updateCartUI(): void {
    renderCart.innerHTML = ""; 

    if (cartArr.length === 0) {
        const emptyMsg = document.createElement("p") as HTMLParagraphElement;
        emptyMsg.textContent = "Cart is Empty";
        emptyMsg.setAttribute("class", "empty-cart-msg");
        renderCart.appendChild(emptyMsg);
    } else {
        const cartTitle = document.createElement("h2") as HTMLHeadingElement;
        cartTitle.textContent = "Here's Your Cart";
        cartTitle.setAttribute("class", "cart-title");
        renderCart.appendChild(cartTitle);

        cartArr.forEach((item: CartItem, index: number) => {
            const cartDiv = document.createElement("div") as HTMLDivElement;
            cartDiv.setAttribute("class", "cart-style");

            const cartImg = document.createElement("img") as HTMLImageElement;
            cartImg.setAttribute("src", item.m);
            cartImg.setAttribute("class", "cartImgElement");

            const cartTitle = document.createElement("p") as HTMLParagraphElement;
            cartTitle.textContent = item.p;

            const cartPrice = document.createElement("p") as HTMLParagraphElement;
            cartPrice.textContent = `$${item.r}`;
            cartPrice.setAttribute("class", "cart-price");

            const cartTrash = document.createElement("i") as HTMLElement;
            cartTrash.setAttribute("class", "fa-solid fa-trash");
            cartTrash.style.cursor = "pointer";
            cartTrash.addEventListener("click", () :void => removeFromCart(index));

            cartDiv.appendChild(cartImg);
            cartDiv.appendChild(cartTitle);
            cartDiv.appendChild(cartPrice);
            cartDiv.appendChild(cartTrash);
            renderCart.appendChild(cartDiv);
        });
    }

    cartItem.innerHTML = cartArr.length.toString();
}

function addToCart(img:string, title:string, price:number) {
    cartArr.push({ m: img, p: title, r: price });
    alert("Product Successfully Added to Cart");
    updateCartUI();
}

function removeFromCart(index:number) {
    cartArr.splice(index, 1);
    alert("Item Removed Successfully...")
    updateCartUI();
}

async function getProd() {
    const response = await fetch("https://fakestoreapi.com/products");
    interface Product {
        image: string;
        title: string;
        price: number;
    }
    const data: Product[] = await response.json();
    
    data.forEach((ele) => {
        const createImg = document.createElement("img") as HTMLImageElement;
        const createTitle = document.createElement("p") as HTMLParagraphElement;
        const createTitleBox = document.createTextNode(`${ele.title.slice(0, 35)}...`);
        const prodMainDiv = document.createElement("div") as HTMLDivElement;
        const createPrice = document.createElement("p") as HTMLParagraphElement;
        const createPriceBox = document.createTextNode(` Price : $${ele.price}`);
        const btnElement = document.createElement("button") as HTMLButtonElement;
        const btnText = document.createTextNode("Add to Cart");

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

        btnElement.addEventListener("click", ():void => addToCart(ele.image, ele.title, ele.price));
    });
}

document.addEventListener("DOMContentLoaded", function ():void {
    updateCartUI(); 
    getProd();
});
