const backtop = document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth" 
    });
})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const slidebtn = document.querySelector(".second-1");

slidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
})

cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
})

const sign = document.querySelector(".ac");
const trl = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    trl.classList.toggle("active");
})


//--------------------------------------------------------------------------------------------//

// Function to make API call and fetch products
async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  
  // Function to display products based on search query
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    if (products.length === 0) {
      productList.style.display = 'none';
      return;
    }
  
    productList.style.display = 'block';
  
    products.forEach((product) => {
      const item = document.createElement('div');
      item.innerHTML = `<p>${product.title}</p>`;
      productList.appendChild(item);
    });
  }
  
  // Function to handle search input
  function handleSearchInput() {
    const searchInput = document.getElementById('search-item');
    const searchQuery = searchInput.value.toLowerCase().trim();
  
    if (searchQuery === '') {
      displayProducts([]);
      return;
    }
  
    fetchProducts().then((products) => {
      const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery);
      });
      displayProducts(filteredProducts);
    });
  }
  
  // Event listener for search input
  const searchInput = document.getElementById('search-item');
  searchInput.addEventListener('input', handleSearchInput);
  
  // Event listener for clearing search input
  searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
      displayProducts([]);
    }
  });
  
