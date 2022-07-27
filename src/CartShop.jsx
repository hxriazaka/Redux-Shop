import CartProduct from "./CartProduct";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const CartShop = ({ cart, cartAfterDiscount }) => {
  const [subTotal, setSubTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let totalPrice = 0;

    cart.forEach((item) => {{

      const bread = cart.filter((item) => {
        return item.price === 1
      })
      const butter = cart.filter((item) => {
        return item.price === 0.8
      })

      try {
        if(butter[0].qty >= 2){
            bread[0].price = 0.5
            totalPrice += item.price * item.qty
            setTotal(totalPrice)
        } else {
          totalPrice += item.price * item.qty
          setTotal(totalPrice)
        }
      } catch (error) {
        totalPrice += item.price * item.qty
        setTotal(totalPrice)
      }
  }});

  }, [cart, cartAfterDiscount, total, setTotal])
  return ( 
    <div className="cartShop">
      <div className="cart-shop-title">
        <h2>CART</h2>
      </div>
      {cart.map(item => (
        < CartProduct key={item.id} item={item}/>
      ))}
      <div className="cart-shop-total">
        <div className="subtotal">
          <p>Subtotal</p>
          <strong>£{subTotal}</strong>
        </div>
        <div className="discount">
          <p>Discount</p>
          <strong>£0.5</strong>
        </div>
        <div className="total">
          <p>Total</p>
          <strong>£{total}</strong>
        </div>
      </div>
    </div>
   );
}
 
const stateProps = (state) => {
  return {
    cart: state.shop.cart,
    products: state.shop.products,
    cartAfterDiscount: state.shop.cartAfterDiscount
  }
}

export default connect (stateProps) (CartShop);