//Electronic Collection
const renderElectronics = document.querySelector(".renderElectronics") as HTMLDivElement;

async function getElectronics() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        interface Electronics{
            image:string;
            price:number;
            title:string;
            category:string
        }
        const data:Electronics[] = await response.json();
        const elctronics = data.filter(item => item.category === "electronics");

        elctronics.forEach((ele) => {
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
            renderElectronics.appendChild(prodMainDiv);
        });
    } catch (error) {
        console.error("Error fetching Electronics:", error);
    }
}

document.addEventListener("DOMContentLoaded", function(): void{
    getElectronics();});

