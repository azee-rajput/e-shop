import { useCallback, useEffect, useState } from "react";
import data from "./components/data";

function useApp() {
  const [cartItem, setCartItem] = useState([]);
  const [itemQuantity, setItemQuantity] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function addToCart(itemId) {
    let item = data.products.filter((x) => x._id === itemId);
    let itemArr = Array.from(cartItem);
    let quantityArr = Array.from(itemQuantity);
    if (itemArr.some((x) => x._id === itemId)) {
      let itemIndex = quantityArr.findIndex((x) => x._id === itemId);
      quantityArr[itemIndex].quantity = quantityArr[itemIndex].quantity + 1;
    } else {
      itemArr.push(item[0]);
      let newItem = { quantity: 1, _id: itemId, price: item[0].price };
      quantityArr.push(newItem);
    }
    setItemQuantity(quantityArr);
    setCartItem(itemArr);
  }

  function removeItem(itemId) {
    let item = cartItem.filter((x) => x._id !== itemId);
    let quantityArr = itemQuantity.filter((x) => x._id !== itemId);
    setCartItem(item);
    setItemQuantity(quantityArr);
  }

  function removeOneitem(itemId) {
    let quantityIndex = itemQuantity.findIndex((x) => x._id === itemId);
    let quantityArr = Array.from(itemQuantity);
    if (quantityIndex > -1) {
      if (quantityArr[quantityIndex].quantity < 2) {
        removeItem(itemId);
        return;
      }
      quantityArr[quantityIndex].quantity =
        quantityArr[quantityIndex].quantity - 1;
      setItemQuantity(quantityArr);
    }
  }

  const updateCartTotal = useCallback(()=>{
    let total = 0
    itemQuantity.forEach(element => {
        total += element.price * element.quantity 
    });
    setCartTotal(total)
  },[itemQuantity])

  useEffect(()=>{
    updateCartTotal()
  },[updateCartTotal])
  return {
    cartItem,
    setCartItem,
    itemQuantity,
    setItemQuantity,
    addToCart,
    removeItem,
    removeOneitem,
    cartTotal,
  };
}

export default useApp;
