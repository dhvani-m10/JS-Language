console.log("starting");


const getData = async () => {
    try {
        let req = await fetch("https://dummyjson.com/products");
        let result = await req.json();
        console.log(result);
        mapper(result.products); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

getData();

console.log("setting stat");

const mapper = (data) => {
    data.map((item) => {
        let productContainer = document.createElement("div");
        productContainer.className = "product";

        let title = document.createElement("h2");
        title.innerHTML = item.title;

        let img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;

        let price = document.createElement("p");
        price.innerHTML = `Price: ${item.price}`;

        let category = document.createElement("p");
        category.innerHTML = `Category: ${item.category}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${item.rating}`;

        productContainer.append(title, img, price, category, rating);
        document.getElementById("product").append(productContainer);
    });
};

console.log("ending");