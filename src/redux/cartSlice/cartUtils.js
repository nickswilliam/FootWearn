export const addItemToCart = (cartItems, product) => {
  const productInCart = cartItems.find((item) => item.id === product.id && item.sizeSelect === product.sizeSelect);

  if (productInCart) {
    return cartItems.map((item) =>
      item.id === productInCart.id && item.sizeSelect === productInCart.sizeSelect
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const removeItemToCart = (cartItems, product) => {
  const productToRemove = cartItems.find((item) => item.id === product.id && item.sizeSelect === product.sizeSelect);

  if (productToRemove.quantity > 1) {
    return cartItems.map((item) =>
      item.id === productToRemove.id && item.sizeSelect === productToRemove.sizeSelect
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return cartItems.filter(item=> item.id !== productToRemove.id)
};

export const resetShippingCost = (cartItems, shippingCost) => {
    if(cartItems.length === 1 && cartItems[0].quantity === 1){
        return 0
    }

    return shippingCost;
}