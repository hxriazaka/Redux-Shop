import { connect } from "react-redux";
import { addItem } from "./Redux/Reducers/shopActions"

const Product = ({ productData, addItem}) => {
  return ( 
    <div className="product">
      <div className="content">
        <img src={productData.image} alt="" />
        <div>
          <div className="title"><strong>{productData.title}</strong></div>
          <div className="desctiption"><small>{productData.desctiption}</small></div>
        </div>
        <div>
          <div className="review">⭐⭐⭐⭐</div>
          <div className="price">£{productData.price}</div>
        </div>
      </div>
      <div className="button">
        <button onClick={() => addItem(productData.id)}>ADD TO CART</button>
      </div>
    </div>
  );
}

const dispatchProps = (dispatch) => {
  return {
    addItem: (id) => dispatch(addItem(id))
  }
}
 
export default connect(null, dispatchProps) (Product);