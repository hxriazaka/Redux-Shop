import Product from "./Product";
import {connect} from "react-redux"

const Products = ( {products} ) => {
  return ( 
    <div className="products">
      <div className="products-title">
        <h2>PRODUCTS</h2>
      </div>
      {products.map((prod) => (
        <Product key={prod.id} productData={prod}/>
      ))}
    </div>
  );
}

const mapState = (state) => {
  return {
    products: state.shop.products,
  }
}
 
export default connect(mapState)(Products);