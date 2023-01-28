var ShoppingCart = (function($) {
	
	
	
	var productsEl = document.querySelector(".products"),
		cartEl =     document.querySelector(".shopping-cart-list"),
		productQuantityEl = document.querySelector(".product-quantity"),
		emptyCartEl = document.querySelector(".empty-cart-btn"),
		cartCheckoutEl = document.querySelector(".cart-checkout"),
		totalPriceEl = document.querySelector(".total-price");
	
	
	var products = [
	  {
		id: 0,
		name: "iPhone 13",
		description: "iPhone 13 features a cinema standard wide color gamut, displaying colors just as filmmakers intended.",
		imageUrl: "https://itronics.in/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png",
		price: 1199
	  },
	  {
		id: 1,
		name: "iPhone 13 Pro Max",
		description: "Apple iPhone 13 Pro Max ; CPU, Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard) ; GPU, Apple GPU (5-core graphics) ; Memory, Card slot ; Internal, 128GB 6GB",
		imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM2Y3_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634250858000",
		price: 1999,
	  },
	  {
		id: 2,
		name: "Macbook Air",
		description: "The M1 chip and macOS Monterey work together to make the entire system snappier. MacBook Air wakes instantly from sleep",
		imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61aUBxqc5PL._AC_UL320_SR320,320_.jpg",
		price: 1499
	  },
	  {
		id: 3,
		name: "Macbook",
		description: "The MacBook Air was among the first of Apple's Macs to make the transition to Apple silicon.",
		imageUrl: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
		price: 999
	  },
	  {
		id: 4,
		name: "iPad 11inch",
		description: "The iPad is Apple's most affordable and most popular tablet, and the ninth-generation model features the A13 Bionic chip.",
		imageUrl: "https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/i/p/ipad-pro-2020-11-inch-silver_1_1_1.webp",
		price: 599
	  },
	  {
		id: 5,
		name: "iPad Mini",
		description: "iPad is Apple's most affordable and most popular tablet, and the ninth-generation model features the A13 Bionic chip.",
		imageUrl: "https://s13emagst.akamaized.net/products/21007/21006489/images/res_2d9809388e56d7c9fd3e68f206be69b6.jpg",
		price: 499
	  }
	],
		productsInCart = [];
	

	var generateProductList = function() {
	  products.forEach(function(item) {
		var productEl = document.createElement("div");
		productEl.className = "product";
		productEl.innerHTML = `<div class="product-image">
								  <img src="${item.imageUrl}" alt="${item.name}">
							   </div>
							   <div class="product-name"><span>Product:</span> ${item.name}</div>
							   <div class="product-description"><span>Description:</span> ${item.description}</div>
							   <div class="product-price"><span>Price:</span> ${item.price} $</div>
							   <div class="product-add-to-cart">
								 <a href="#0" class="button see-more">More Details</a>
								 <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
							   </div>
							</div>
  `;
							   
  productsEl.appendChild(productEl);
	  });
	}
	

	var generateCartList = function() {
	  
	  cartEl.innerHTML = "";
	  
	  productsInCart.forEach(function(item) {
		var li = document.createElement("li");
		li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
		cartEl.appendChild(li);
	  });
	  
	  productQuantityEl.innerHTML = productsInCart.length;
	  
	  generateCartButtons()
	}
	
	

	var generateCartButtons = function() {
	  if(productsInCart.length > 0) {
		emptyCartEl.style.display = "block";
		cartCheckoutEl.style.display = "block"
		totalPriceEl.innerHTML = "Rs. " + calculateTotalPrice();
	  } else {
		emptyCartEl.style.display = "none";
		cartCheckoutEl.style.display = "none";
	  }
	}
	

	var setupListeners = function() {
	  productsEl.addEventListener("click", function(event) {
		var el = event.target;
		if(el.classList.contains("add-to-cart")) {
		 var elId = el.dataset.id;
		 addToCart(elId);
		}
	  });
	  
	  emptyCartEl.addEventListener("click", function(event) {
		if(confirm("Are you sure?")) {
		  productsInCart = [];
		}
		generateCartList();
	  });
	}
	

	var addToCart = function(id) {
	  var obj = products[id];
	  if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
		productsInCart.push({product: obj, quantity: 1});
	  } else {
		productsInCart.forEach(function(item) {
		  if(item.product.id === obj.id) {
			item.quantity++;
		  }
		});
	  }
	  generateCartList();
	}
	
	

	var productFound = function(productId) {
	  return productsInCart.find(function(item) {
		return item.product.id === productId;
	  });
	}
  
	var calculateTotalPrice = function() {
	  return productsInCart.reduce(function(total, item) {
		return total + (item.product.price *  item.quantity);
	  }, 0);
	}
	
	
	var init = function() {
	  generateProductList();
	  setupListeners();
	}
	

	return {
	  init: init
	};
	

  })(jQueury);
  
  ShoppingCart.init();
