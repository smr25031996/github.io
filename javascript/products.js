var products = [
  {
    name: "Product 1",
    price: "&#8377;19.99",
    rating: "★★★☆☆",
    image: "/assets/product1.jpg",
  },
  {
    name: "Product 2",
    price: "&#8377;24.99",
    rating: "★★★☆☆",
    image: "/assets/product2.jpg",
  },
  {
    name: "Product 3",
    price: "&#8377;14.95",
    rating: "★★★★☆",
    image: "/assets/product3.jpg",
  },
  {
    name: "Product 4",
    price: "&#8377;29.99",
    rating: "★★★☆☆",
    image: "/assets/product4.jpg",
  },
  {
    name: "Product 5",
    price: "&#8377;39.99",
    rating: "★★★☆☆",
    image: "/assets/product5.jpg",
  },
  {
    name: "Product 6",
    price: "&#8377;49.99",
    rating: "★★★★☆",
    image: "/assets/product6.jpg",
  },
  {
    name: "Product 7",
    price: "&#8377;22.95",
    rating: "★★★★☆",
    image: "/assets/product7.jpg",
  },
  {
    name: "Product 8",
    price: "&#8377;15.99",
    rating: "★★★★☆",
    image: "/assets/product8.jpg",
  },
  {
    name: "Product 9",
    price: "&#8377;34.99",
    rating: "★★★★☆",
    image: "/assets/product9.jpg",
  },
  {
    name: "Product 10",
    price: "&#8377;25.99",
    rating: "★★★☆☆",
    image: "/assets/product10.jpg",
  },
  {
    name: "Product 11",
    price: "&#8377;12.95",
    rating: "★★★★★",
    image: "/assets/product11.jpg",
  },
  {
    name: "Product 12",
    price: "&#8377;19.99",
    rating: "★★★☆☆",
    image: "/assets/product12.jpg",
  },
  {
    name: "Product 13",
    price: "&#8377;14.95",
    rating: "★★★★☆",
    image: "/assets/product13.jpg",
  },
  {
    name: "Product 14",
    price: "&#8377;29.99",
    rating: "★★★☆☆",
    image: "/assets/product14.jpg",
  },
  {
    name: "Product 15",
    price: "&#8377;39.99",
    rating: "★★★★☆",
    image: "/assets/product15.jpg",
  },
  {
    name: "Product 16",
    price: "&#8377;49.99",
    rating: "★★★★☆",
    image: "/assets/product16.jpg",
  },
  {
    name: "Product 17",
    price: "&#8377; 22.95",
    rating: "★★★★☆",
    image: "/assets/product17.jpg",
  },
  {
    name: "Product 18",
    price: "&#8377; 15.99",
    rating: "★★★★☆",
    image: "/assets/product18.jpg",
  },
  {
    name: "Product 19",
    price: " &#8377;34.99",
    rating: "★★★★☆",
    image: "/assets/product19.jpg",
  },
  {
    name: "Product 20",
    price: " &#8377; 25.99",
    rating: "★★★☆☆",
    image: "/assets/product20.jpg",
  },
];

// Loop through the products and generate product cards
const productContainer = document.getElementById("product-container");
products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("col-md-4");
  productCard.innerHTML = `
            <div class="card product-card">
                <img src="/assets/${product.name}.jpg" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: ${product.price}</p>
                    <p class="card-text">Rating: ${product.rating}</p>
                    <button class="btn btn-primary btn-cart">
                     <i class="fas fa-shopping-cart btn-icon"></i>
                </button>
                <button class="btn btn-secondary btn-favorite">
                     <i class="fas fa-heart btn-icon"></i>
                </button>
                </div>
            </div>
        `;
  productContainer.appendChild(productCard);
});
