export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  //for null sotrage
  [
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 2,
    },
    {
      //default values for basic
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
  ];
} //help access varibales outside the file

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addtocart(productId) {
  const quantitydata = document.querySelector(
    `.js-quantity-selector-${productId} select`
  );
  const quantity = Number(quantitydata.value); //because we are extracting the value that is a string so we extract it from thre as a number
  //if option does not
  //
  //check if product alreasdy in cart just increment its quantity
  let matchingitem; //get the individual obj in cart
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingitem = cartItem; //takes item with product name;
    }
  });
  //and matching get let each time button clicked so if amthcing item not set to item then it will be falsy and cart.push happens
  //adding total cart quantity on icon and incrementign cart quant insead of creating new objects by using unique id
  if (matchingitem) {
    matchingitem.quantity += quantity;
    //increments if it is true
  } else {
    cart.push({
      //shorthand property
      productId,
      quantity, //for updated quantity value if a different product is selecte from the id
    });
  }
  saveToStorage();
}

//saving to local storage whenver we add a product

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem); // it pushes the cart item to new arr and only the one which ha the productId remains in cart object
    }
  });
  cart = newCart; //cart will have only 1 item remaining
  saveToStorage();
}

//bcz we running it again n again after each we store
