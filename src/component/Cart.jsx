import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart();

  const totalBill = cart.item.reduce(
    (acc, curr) => acc + parseFloat(curr.price),
    0
  );

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.item.length > 0 ? (
        <ul>
          {cart.item.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <h5>Total bill: ${totalBill.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
