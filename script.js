// =========================
// CART
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// =========================
// SAVE CART
// =========================

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}


// =========================
// CART ICON
// =========================

function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    cartCount.textContent = count;
}


// =========================
// ADD PRODUCT
// =========================

function addToCart(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    alert(product.name + " bekerült a kosárba.");
}


// =========================
// REMOVE PRODUCT
// =========================

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    displayCart();
}


// =========================
// PLUS
// =========================

function increaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    if (product) {

        product.quantity++;

        saveCart();

        displayCart();

    }

}


// =========================
// MINUS
// =========================

function decreaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    if (!product) return;

    product.quantity--;

    if (product.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    displayCart();

}


// =========================
// TOTAL
// =========================

function getTotalPrice() {

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    return total;

}


// =========================
// DISPLAY CART
// =========================

function displayCart() {

    const container = document.getElementById("cart-items");

    const total = document.getElementById("total-amount");

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <h3 class="text-center mt-5">
                A kosár üres
            </h3>
        `;

        if (total) {

            total.textContent = "0";

        }

        return;

    }

    let html = "";

    cart.forEach(item => {

        html += `

        <div class="card mb-3">

            <div class="row g-0">

                <div class="col-md-3">

                    <img
                        src="${item.image}"
                        class="img-fluid rounded-start"
                        alt="${item.name}">

                </div>

                <div class="col-md-9">

                    <div class="card-body">

                        <h4>${item.name}</h4>

                        <p>${item.brand}</p>

                        <h5>${item.price.toLocaleString()} Ft</h5>

                        <div class="d-flex align-items-center gap-2">

                            <button
                                class="btn btn-dark"
                                onclick="decreaseQuantity(${item.id})">

                                -

                            </button>

                            <strong>${item.quantity}</strong>

                            <button
                                class="btn btn-dark"
                                onclick="increaseQuantity(${item.id})">

                                +

                            </button>

                        </div>

                        <br>

                        <button
                            class="btn btn-danger"
                            onclick="removeFromCart(${item.id})">

                            Törlés

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

    if (total) {

        total.textContent =
            getTotalPrice().toLocaleString();

    }

}


// =========================
// CLEAR CART
// =========================

function clearCart() {

    cart = [];

    saveCart();

    displayCart();

}


// =========================
// PAGE LOAD
// =========================

window.onload = function () {

    updateCartCount();

    displayCart();
    
    loadDarkMode();

};
function searchProducts() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const input = searchInput.value.trim().toLowerCase();
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach(function (productItem) {
        const name = productItem.dataset.name || "";

        if (name.toLowerCase().includes(input)) {
            productItem.style.display = "";
        } else {
            productItem.style.display = "none";
        }
    });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    localStorage.setItem("darkMode", isDarkMode);

    updateDarkModeButton();
}

function updateDarkModeButton() {
    const button = document.getElementById("darkModeButton");

    if (!button) {
        return;
    }

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        button.textContent = "☀️";
        button.title = "Világos mód";
    } else {
        button.textContent = "🌙";
        button.title = "Sötét mód";
    }
}

function loadDarkMode() {
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode === "true") {
        document.body.classList.add("dark-mode");
    }

    updateDarkModeButton();
}}


// =========================
// REMOVE PRODUCT
// =========================

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    displayCart();
}


// =========================
// PLUS
// =========================

function increaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    if (product) {

        product.quantity++;

        saveCart();

        displayCart();

    }

}


// =========================
// MINUS
// =========================

function decreaseQuantity(id) {

    const product = cart.find(item => item.id === id);

    if (!product) return;

    product.quantity--;

    if (product.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart();

    displayCart();

}


// =========================
// TOTAL
// =========================

function getTotalPrice() {

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    return total;

}


// =========================
// DISPLAY CART
// =========================

function displayCart() {

    const container = document.getElementById("cart-items");

    const total = document.getElementById("total-amount");

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <h3 class="text-center mt-5">
                A kosár üres
            </h3>
        `;

        if (total) {

            total.textContent = "0";

        }

        return;

    }

    let html = "";

    cart.forEach(item => {

        html += `

        <div class="card mb-3">

            <div class="row g-0">

                <div class="col-md-3">

                    <img
                        src="${item.image}"
                        class="img-fluid rounded-start"
                        alt="${item.name}">

                </div>

                <div class="col-md-9">

                    <div class="card-body">

                        <h4>${item.name}</h4>

                        <p>${item.brand}</p>

                        <h5>${item.price.toLocaleString()} Ft</h5>

                        <div class="d-flex align-items-center gap-2">

                            <button
                                class="btn btn-dark"
                                onclick="decreaseQuantity(${item.id})">

                                -

                            </button>

                            <strong>${item.quantity}</strong>

                            <button
                                class="btn btn-dark"
                                onclick="increaseQuantity(${item.id})">

                                +

                            </button>

                        </div>

                        <br>

                        <button
                            class="btn btn-danger"
                            onclick="removeFromCart(${item.id})">

                            Törlés

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

    if (total) {

        total.textContent =
            getTotalPrice().toLocaleString();

    }

}


// =========================
// CLEAR CART
// =========================

function clearCart() {

    cart = [];

    saveCart();

    displayCart();

}


// =========================
// PAGE LOAD
// =========================

window.onload = function () {

    updateCartCount();

    displayCart();

};
function searchProducts() {
    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const input = searchInput.value.trim().toLowerCase();
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach(function (productItem) {
        const name = productItem.dataset.name || "";

        if (name.toLowerCase().includes(input)) {
            productItem.style.display = "";
        } else {
            productItem.style.display = "none";
        }
    });
}
