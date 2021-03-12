import "./basket.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const Basket = () => {
  const basket = useSelector((state: any) => {
    console.log(state.basket);
    return state.basket;
  });
  return (
    <div className="Basket">
      <div className="Basket__header">
        <Link to="/">
          <ArrowBackIosIcon className="back" />
          <ShoppingBasketIcon className="basket" />
          <span className="basketCount">

          {basket}
          </span>
        </Link>
        <h1>BASKET</h1>
      </div>
    </div>
  );
};

export default Basket;
