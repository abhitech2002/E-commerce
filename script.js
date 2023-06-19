window.addEventListener('DOMContentLoaded', function () {
    var productsContainer = document.getElementById('products');
  
    // Fetch products from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
        products.forEach(function (product) {
          var productElement = createProductElement(product);
          productsContainer.appendChild(productElement);
        });
      });
  
    // Create a product element
    function createProductElement(product) {
      var productElement = document.createElement('div');
      productElement.classList.add('product');
  
      var imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.alt = product.title;
      productElement.appendChild(imageElement);
  
      var titleElement = document.createElement('h3');
      titleElement.textContent = product.title;
      productElement.appendChild(titleElement);
  
      var descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;
      productElement.appendChild(descriptionElement);
  
      var priceElement = document.createElement('p');
      priceElement.textContent = 'Price: $' + product.price;
      productElement.appendChild(priceElement);
  
      var detailsButton = document.createElement('button');
      detailsButton.textContent = 'More Details';
      productElement.appendChild(detailsButton);
  
      var addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.classList.add('add-to-cart');
      addToCartButton.addEventListener('click', function (event) {
        event.stopPropagation();
        addToCart(product);
      });
      productElement.appendChild(addToCartButton);
  
      return productElement;
    }
  
    // Add a product to the cart
    function addToCart(product) {
      var cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
    }
  });
  