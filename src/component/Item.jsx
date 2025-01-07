import { useCart } from "../context/Cart";
import PropTypes from "prop-types";

function Item({ name, price }) {
  const cart = useCart();

  const addItemToCart = () => {
    cart.setItem([...cart.item, { name, price }]);
  };

  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={addItemToCart}>Add to cart</button>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Item;
