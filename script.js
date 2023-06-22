window.addEventListener('DOMContentLoaded', function () {
  var productsContainer = document.getElementById('products');

  // Fetch products from the Fake API Store
  fetch('https://fakestoreapi.com/products')
    // using promises 
    .then((response) => {
      // converting data to json format
      return response.json();
    })
    .then((products) => {
      // Using foreach for accessing all data from API 
      products.forEach((product) => {
        // Create a DOM element for product
        var productElement = createProductElement(product); 
        productsContainer.appendChild(productElement); // append the product into container
      });
    });

  // In DOM adding products element
  function createProductElement(product) {
    var productElement = document.createElement('div');
    productElement.classList.add('product');


    // For Image of product
    var imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.title;
    productElement.appendChild(imageElement);

    // For title of product
    var titleElement = document.createElement('h3');
    titleElement.textContent = product.title;
    productElement.appendChild(titleElement);

    // For price of the product
    var priceElement = document.createElement('p');
    priceElement.textContent = 'Price: $' + product.price;
    productElement.appendChild(priceElement);

    // For Detail of the product
    var detailsButton = document.createElement('button');
    detailsButton.textContent = 'More Details';
    detailsButton.addEventListener('click', function () {
      showDetails(product);
    });
    productElement.appendChild(detailsButton);

    // For AddToCartButton of the product
    var addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', function () {
      addToCart(product);
    });
    productElement.appendChild(addToCartButton);

    return productElement;
  }

  // Show product details
  function showDetails(product) {
    alert('Product Details:\n\nTitle: ' + product.title + '\nDescription: ' + product.description + '\nPrice: $' + product.price);
  }

  // Add a product to the cart
  function addToCart(product) {
    alert('Product added to cart!\n\nTitle: ' + product.title + '\nPrice: $' + product.price);
  }
});
