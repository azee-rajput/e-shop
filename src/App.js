import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import useApp from "./useApp";

function App() {
  const  {
    cartItem,
    itemQuantity,
    addToCart,
    removeItem,
    removeOneitem,
    cartTotal
  } = useApp()

  return (
    <div>
      <h1 className="text-center display-4">Grandtek Shop</h1>
      <ul
        className="nav nav-pills mb-3 border"
        id="pills-tab"
        role="tablist"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <li className="nav-item" style={{ width: "49vw" }}>
          <a
            className="nav-link text-center btn-lg active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item" style={{ width: "49vw" }}>
          <a
            className="nav-link btn-lg text-center"
            id="pills-cart-tab"
            data-toggle="pill"
            href="#pills-cart"
            role="tab"
            aria-controls="pills-cart"
            aria-selected="false"
          >
            Cart (PKR {cartTotal})
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <Home addToCart={addToCart} cartItems={cartItem} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-cart"
          role="tabpanel"
          aria-labelledby="pills-cart-tab"
        >
          <Cart
            cartItems={cartItem}
            quantity={itemQuantity}
            removeItem={removeItem}
            removeOne={removeOneitem}
            addOneMore={addToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
