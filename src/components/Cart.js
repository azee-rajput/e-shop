import React, { useEffect, useState } from "react";

export default function Cart(props) {
  const [cartItem, setCartItem] = useState(props.cartItems);
  const [quantity, setQuantity] = useState(props.quantity);
  //   const cartItem = props.cartItems

  function removeFromCart(itemId) {
    props.removeItem(itemId);
  }

  function removeOneItem(itemId) {
    props.removeOne(itemId);
  }

  function addOneMore(itemId) {
    props.addOneMore(itemId);
  }

  useEffect(() => {
    setCartItem(props.cartItems);
    setQuantity(props.quantity);
  }, [props]);

  if (props.cartItems.length < 1) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>No items</h3>
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {cartItem.map((item, index) => (
          <div
            key={item._id + index}
            style={{ marginTop: "20px" }}
            className="ml-3"
          >
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="card-text">PKR {item.price}</span>
                  <span className="card-text">
                    Available Sizes:{" "}
                    {item.availableSizes.map(
                      (size, sizeIndex) =>
                        size +
                        (sizeIndex !== item.availableSizes.length - 1
                          ? ", "
                          : "")
                    )}
                  </span>
                </div>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    onClick={() => addOneMore(item._id)}
                    className="btn btn-success"
                  >
                    +1
                  </button>
                  <span>
                    Quantity:
                    {quantity.filter((x) => x._id === item._id)[0]
                      ? " " +
                        quantity.filter((x) => x._id === item._id)[0].quantity
                      : null}
                      <br/>
                      Total: {item.price * quantity.filter((x) => x._id === item._id)[0].quantity}
                  </span>
                  <button
                    onClick={() => removeOneItem(item._id)}
                    className="btn btn-warning"
                  >
                    -1
                  </button>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="btn btn-danger mt-3"
                    style={{ justifySelf: "center" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
