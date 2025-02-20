//Men's Collection
let renderElectronics = document.querySelector(".renderElectronics");

async function getElectronics() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const elctronics = data.filter(item => item.category === "electronics");

        elctronics.forEach((ele) => {
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
            renderElectronics.appendChild(prodMainDiv);
        });
    } catch (error) {
        console.error("Error fetching Electronics:", error);
    }
}

document.addEventListener("DOMContentLoaded", getElectronics);

