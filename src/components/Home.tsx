import "./Home.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="Home__header">
        <h1>Redux Toolkit Basket</h1>
        <Link to="/basket">
          <ShoppingBasketIcon className="basket" />
        </Link>
      </div>
      <div className="products__cont">
        <Product
          src="http://pngimg.com/uploads/iphone_11/iphone_11_PNG20.png"
          title="IPHONE 11"
          price="680"
          
        />
        <Product
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000"
          title="IPHONE 11 Pro"
          price="820"
        />
        <Product
          src="http://pngimg.com/uploads/iphone_12/iphone_12_PNG19.png"
          title="IPHONE 12 Pro"
          price="1,099"
        />
      </div>
    </div>
  );
}

export default Home;
