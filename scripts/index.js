// ================================
// LOAD STORAGE DATA (TOP ONLY)
// ================================
let filteredItems = [...items];
let bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

// INITIAL LOAD
displayItems();
displayBagIcon();

// ================================
// DISPLAY ITEMS
// ================================
function displayItems() {
  const container = document.querySelector(".items-container");
  if (!container) return;

  let html = "";

  filteredItems.forEach(item => {
   
    const isWishlisted = wishlistItems.includes(item.id);

    html += `
      <div class="item-container">

        <div class="image-wrapper">

  <span class="material-symbols-outlined wishlist-icon ${isWishlisted ? "active" : ""}"
        onclick="toggleWishlist('${item.id}')">
    favorite
  </span>

      <img class="item-image" src="${item.image}" alt="item image">

      </div>


        <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>

        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>

        <button class="btn-add-bag" onclick="addToBag('${item.id}')">
          Add to Bag
        </button>

      </div>
    `;
  });

  container.innerHTML = html;
}

// ================================
// WISHLIST
// ================================
// function toggleWishlist(itemId) {
//   console.log("Wishlist clicked:", itemId);

//   if (wishlistItems.includes(itemId)) {
//     wishlistItems = wishlistItems.filter(id => id !== itemId);
//   } else {
//     wishlistItems.push(itemId);
//   }

//   localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
//   displayItems(); // re-render UI
// }
function toggleWishlist(itemId) {
  let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  if (wishlistItems.includes(itemId)) {
    wishlistItems = wishlistItems.filter(id => id !== itemId);
  } else {
    wishlistItems.push(itemId);
  }

  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  displayItems(); // re-render to update heart state
}


// ================================
// BAG
// ================================
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  const count = document.querySelector(".bag-item-count");
  if (!count) return;

  if (bagItems.length > 0) {
    count.innerText = bagItems.length;
    count.style.visibility = "visible";
  } else {
    count.style.visibility = "hidden";
  }
}

function applyFilters() {
  const checkedCategories = Array.from(
    document.querySelectorAll('.filter-group input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  if (checkedCategories.length === 0) {
    filteredItems = [...items];
  } else {
    filteredItems = items.filter(item =>
      checkedCategories.some(filter =>
        item.company.includes(filter) || item.item_name.includes(filter)
      )
    );
  }

  displayItems();
}
