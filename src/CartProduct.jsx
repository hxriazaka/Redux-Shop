import { addItem, removeItem} from "./Redux/Reducers/shopActions";
import { connect } from "react-redux";

const CartProduct = ({ item, addItem, removeItem }) => {

  return ( 
    <div className="cartProduct">
      <img src={item.image} alt="" />
      <div className="cart-product-title">
        <small>{item.title}</small>
        <div className="quantity">
          <small>quantity</small>
          <div className="quantity-button">
            <button onClick={() => addItem(item.id)}>+</button>
            <p>{item.qty}</p>
            <button onClick={() => removeItem(item.id)}>-</button>
          </div>
        </div>
      </div>
      <div className="price">£{item.price}</div>
    </div>
   );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => dispatch(addItem(id)),
    removeItem: (id) => dispatch(removeItem(id))
  };
};
 
export default connect(null, mapDispatchToProps) (CartProduct);