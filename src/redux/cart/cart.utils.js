export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCatrtItem = cartItems.find(x => x.id === cartItemToAdd.id);

  if (existingCatrtItem) {
    return cartItems.map(x =>
      x.id === cartItemToAdd.id ? { ...x, quantity: x.quantity + 1 } : x
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCatrtItem = cartItems.find(x => x.id === cartItemToRemove.id);

  if (existingCatrtItem.quantity === 1) {
    return cartItems.filter(x => x.id !== cartItemToRemove.id);
  }

  return cartItems.map(x =>
    x.id === cartItemToRemove.id ? { ...x, quantity: x.quantity - 1 } : x
  );
};
