export const cart = []; //help access varibales outside the file

export function addtoocart(productId) {
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
}
