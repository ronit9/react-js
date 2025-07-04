
const loginuser = JSON.parse(localStorage.getItem("single")) || []

function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}


// Optional: close dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdownMenu");
    const trigger = document.getElementById("profileDropdown");

    if (!trigger.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
window.onload = () => {
    let username = document.getElementById("username")
    username.innerHTML = "hii" + "  " + loginuser.name

    statusid = document.getElementById("statusid")
    statusid.innerHTML = loginuser ? "Logout" : "Login"

}

const logout = () => {
    localStorage.removeItem("single")
    window.location.href = "login.html"
}

// banner js

const phrases = [
    "🔥 Trending Now!",
    "⚡ Limited Time Deals!",
    "🚚 Fastest Delivery!",
    "🛍️ Explore Our Collections!"
];

const fancyTyping = document.getElementById("fancy-typing");
let phraseIndex = 0;

function showNextPhrase() {
    const phrase = phrases[phraseIndex];
    fancyTyping.innerHTML = "";
    fancyTyping.style.opacity = 1;

    [...phrase].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "char";
        span.style.animationDelay = `${i * 0.03}s`;
        fancyTyping.appendChild(span);
    });

    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(() => {
        fancyTyping.style.opacity = 0;
        setTimeout(showNextPhrase, 800);
    }, 3000);
}

showNextPhrase();

// Floating Particles
const particleContainer = document.getElementById("particles");
for (let i = 0; i < 80; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    p.style.backgroundColor = Math.random() > 0.5 ? "var(--primary-orange)" : "#3ba9fb";
    particleContainer.appendChild(p);
}


const filter = async (type) => {
    const allProducts = []

    try {
        const res = await fetch("https://dummyjson.com/products?limit=200")
        const data = await res.json()
        allProducts.push(...data.products)
        showproduct(allProducts)
    } catch (err) {
        console.log(err)
    }

    if (type === "Clothing") {
        const filteredProducts = allProducts.filter((val) => {
            return val.category == "mens-shirts" || val.category == "womens-dresses" || val.category === "tops"
        })
        showproduct(filteredProducts)
    } else if (type === "beauty") {
        const filteredProducts = allProducts.filter((val) => {
            return val.category == "fragrances" || val.category == "beauty" || val.category == "skin-care" || val.category == "sunglasses" || val.category == "womens-dresses" || val.category == "womens-jewellery" | val.category === "'womens-bags"
        })
        showproduct(filteredProducts)
    } else if (type === "sports") {
        const filteredProducts = allProducts.filter((val) => {
            return val.category == "sports-accessories" || val.category == "mens-shoes"
        })
        showproduct(filteredProducts)
    } else if (type === "furniture") {
        const filteredProducts = allProducts.filter((val) => {
            return val.category == "furniture" || val.category === "home-decoration" || val.category === "kitchen-accessories"
        })
        showproduct(filteredProducts)
    } else if (type === "groceries") {
        const filteredProducts = allProducts.filter((val) => {
            return val.category == "groceries"
        })
        showproduct(filteredProducts)
    } else if (type === "electronics") {
        const filteredProducts = allProducts.filter((val) => {
            return val.category == "laptops" || val.category == "smartphones" || val.category === "mobile-accessories"
        })
        showproduct(filteredProducts)
    }
}


filter()



const showproduct = (getitem) => {
    let card = ""
    getitem.slice(0, 4).map((val, index) => {
        card += `
         <div class="flip-card" style="width: 20rem; ">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="${val.thumbnail}" style="animation-delay: ${index * 0.3}s;" class="card-img-top" alt="...">
        </div>
        <div class="flip-card-back justify-content-between">
            <h4 class="card-title">${val.title}</h4>
    <p class="card-text">${val.description}</p>
    <h5 class="price"> ₹ ${val.price}</h5>
  <!-- From Uiverse.io by vinodjangid07 --> 
<button class="cartBtn" type="button" onclick="addToCart(${val.id},event)">
    <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
    </svg>
    ADD TO CART
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product">
      <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"/>
    </svg>
  </button>
        </div>
    </div>
</div>
        `
    })
    document.getElementById("product-list").innerHTML = card

}


// animation 
const allProducts = [];
let currentProduct = 0;
let isScrolling = false;
let autoSlideInterval;

fetch("https://dummyjson.com/products?limit=200")
    .then(res => res.json())
    .then(data => {
        allProducts.push(...data.products);
        renderProduct(currentProduct);
        startAutoSlide();
    });

function preloadImage(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
    });
}

async function renderProduct(index) {
    const product = allProducts[index];
    const img = document.getElementById("product-img");
    const details = document.getElementById("product-details")
    const title = document.getElementById("product-title");
    const description = document.getElementById("product-description");
    const price = document.getElementById("product-price");
    const cartButton = document.getElementById("addToCart")
    cartButton.setAttribute("data-id", product.id);
    cartButton.addEventListener("click", () => {
        const id = cartButton.getAttribute("data-id");
        addToCart(id);
    });
     



    img.classList.remove("magic-in");
    img.classList.add("magic-out");
    isScrolling = true;

    await preloadImage(product.thumbnail);

    setTimeout(() => {
        img.src = product.thumbnail;
        title.innerText = product.title;
        description.innerText = product.description;
        price.innerText = "₹" + product.price;

        img.classList.remove("magic-out");
        img.classList.add("magic-in");
        details.classList.remove("fade");
        void details.offsetWidth;
        details.classList.add("fade");
        setTimeout(() => isScrolling = false, 700);
    }, 500);
}

window.addEventListener("wheel", (e) => {
    if (isScrolling || allProducts.length === 0) return;
    clearInterval(autoSlideInterval);
    currentProduct = e.deltaY > 0
        ? (currentProduct + 1) % allProducts.length
        : (currentProduct - 1 + allProducts.length) % allProducts.length;
    renderProduct(currentProduct);
    startAutoSlide();
});

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isScrolling && allProducts.length) {
            currentProduct = (currentProduct + 1) % allProducts.length;
            renderProduct(currentProduct);
        }
    }, 5000);
}

