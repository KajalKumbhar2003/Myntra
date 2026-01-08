// let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
// let bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];

// displayWishlistItems();

// function displayWishlistItems() {
//   // 🔥 IMPORTANT FIX: always sync with localStorage
//   wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

//   const container = document.querySelector("#wishlist-container");
//   if (!container) return;

//   if (wishlistItems.length === 0) {
//     container.innerHTML = "<h3>Your wishlist is empty ❤️</h3>";
//     return;
//   }

//   let html = "";

//   wishlistItems.forEach(id => {
//     const item = items.find(product => product.id === id);
//     if (!item) return;

//     html += `
//       <div class="item-container">
//         <img class="item-image" src="../${item.image}" alt="item image">

//         <div class="company-name">${item.company}</div>
//         <div class="item-name">${item.item_name}</div>

//         <div class="price">
//           <span class="current-price">Rs ${item.current_price}</span>
//           <span class="original-price">Rs ${item.original_price}</span>
//         </div>

//         <button onclick="addToBag('${item.id}')">Add to Bag</button>
//         <button onclick="removeFromWishlist('${item.id}')">Remove</button>
//       </div>
//     `;
//   });

//   container.innerHTML = html;
// }

// function removeFromWishlist(itemId) {
//   wishlistItems = wishlistItems.filter(id => id !== itemId);
//   localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
//   displayWishlistItems();
// }

// function addToBag(itemId) {
//   bagItems.push(itemId);
//   localStorage.setItem("bagItems", JSON.stringify(bagItems));
//   alert("Item added to bag");
// }

let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
let bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];

displayWishlistItems();

function displayWishlistItems() {
  // 🔥 IMPORTANT FIX: always sync with localStorage
  wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  const container = document.querySelector("#wishlist-container");
  if (!container) return;

  if (wishlistItems.length === 0) {
    container.innerHTML = "<h3>Your wishlist is empty ❤️</h3>";
    return;
  }

  let html = "";

  wishlistItems.forEach(id => {
    const item = items.find(product => product.id === id);
    if (!item) return;

    html += `
      <div class="item-container">
        <img class="item-image" src="../${item.image}" alt="item image">

        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
        </div>

        <button onclick="addToBag('${item.id}')">Add to Bag</button>
        <button onclick="removeFromWishlist('${item.id}')">Remove</button>
      </div>
    `;
  });

  container.innerHTML = html;
}

function removeFromWishlist(itemId) {
  wishlistItems = wishlistItems.filter(id => id !== itemId);
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  displayWishlistItems();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  alert("Item added to bag");
}
