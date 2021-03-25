import React from "react";
import data from "./data.js";

export default function Home(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {data.products.map((item, index) => (
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
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
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
                <button
                  onClick={() => props.addToCart(item._id)}
                  className={
                    props.cartItems.some((x) => x._id === item._id)
                      ? "btn btn-dark"
                      : "btn btn-primary"
                  }
                  disabled={props.cartItems.some((x) => x._id === item._id)}
                >
                  {props.cartItems.some((x) => x._id === item._id)
                    ? "In Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
