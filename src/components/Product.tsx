import "./product.css";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  src: string;
  title: string;
  price: Number;
};
const Product = ({ src, title, price }: Props) => {
  const dispatch = useDispatch();
  // const basket = useSelector((state:any) => {
  //   console.log(state)
  //   return state.basket;
  // });
  return (
    <div className="product">
      <img src={src} className="product__image" alt={title} />
      <p className="product__title">{title}</p>
      <p className="product__price">${price}</p>
     
      <Button
        onClick={() => {
          dispatch({ type: "ADD_TO_BASKET" });
        }}
        variant="contained"
        className="product__button"
        color="default"
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
