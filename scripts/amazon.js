import { cart, addtocart } from "../data/cart.js"; //importing cart varibale from cart.js
import { products } from "../data/products.js";
import { currencyFormat } from "./utils/money.js";
//mycart to avoid naming conflicts
// since we are exporting this varibale we can remove cart from html file and now no naming conflict will be ther if i name a cart varibale

//adding a string each time we loop throguh a array to create all product combined html string
let productHtml = "";
products.forEach((product) => {
  productHtml += ` <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div> 

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">
          $${currencyFormat(product.priceCents)}</div>

          <div class="product-quantity-container js-quantity-selector-${
            product.id
          }">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>
          <div class="added-to-cart adc-js-${product.id} ">
          <img class="check-img-js" src="images/icons/checkmark.png" />
            Added
       
          </div>

          <button class="add-to-cart-button button-primary addtocart-js" data-product-name="${
            product.name //fetching name for individual product not whole so no 's
          }" data-product-id="${product.id}">Add to Cart</button>
        </div>
`;
});

document.querySelector(".product-grid-js").innerHTML = productHtml;

// This object stores a unique timeout ID for each product.
// It allows us to clear a specific product's timer without affecting others,
// which is crucial for handling multiple "Add to Cart" clicks on different products.
const addedMsgTmt = {};

export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".cart-quantity-js").innerHTML = cartQuantity;
}

//gives list of all add to cart buttons
document.querySelectorAll(".addtocart-js").forEach((button) => {
  button.addEventListener("click", () => {
    //storing name in a variable
    const { productId } = button.dataset; //destructuring of productid
    //using id for duplicate product names
    //converting from kebab case to camo case

    ///
    addtocart(productId);
    updateCartQuantity();
    //
    const addedmsg = document.querySelector(`.adc-js-${productId}`);
    addedmsg.classList.add("add-to-cart-visible");
    //
    clearTimeout(addedMsgTmt[productId]);
    //
    addedMsgTmt[productId] = setTimeout(() => {
      //added a object for removing added msg when multiple produts are clicked
      addedmsg.classList.remove("add-to-cart-visible");
    }, 2500);

    ///
    //
    //
    //
  });
});
//
//
//
