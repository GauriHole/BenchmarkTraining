//Men's Collection
const renderMensFashion = document.querySelector(".renderMensFashion") as HTMLDivElement;

async function getMensFashion() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        interface Product{
            image:string;
            price:number;
            title:string;
            category:string
        }
        const data: Product[] = await response.json();
        const mensWear = data.filter(item => item.category === "men's clothing");

        mensWear.forEach((ele) => {
            let createImg = document.createElement("img") as HTMLImageElement;
            let createTitle = document.createElement("p") as HTMLParagraphElement;
            let createTitleBox = document.createTextNode(`${ele.title.slice(0, 35)}...`);
            let prodMainDiv = document.createElement("div") as HTMLDivElement;
            let createPrice = document.createElement("p") as HTMLParagraphElement;
            let createPriceBox = document.createTextNode(` Price : $${ele.price}`);
            let btnElement = document.createElement("button") as HTMLButtonElement;
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
            renderMensFashion.appendChild(prodMainDiv);
        });
    } catch (error) {
        console.error("Error fetching Men's Fashion:", error);
    }
}

document.addEventListener("DOMContentLoaded", function() : void{
    getMensFashion();});

