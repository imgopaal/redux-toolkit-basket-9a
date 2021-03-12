import "./product.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
type Props = {
  src: string;
  title: string;
};
const Product = ({ src, title }: Props) => {
  return (
    <div className="product">
      <img src={src} className="product__image" />
      <p className="product__title">{title}</p>
      <Button variant="contained" className="product__button" color="default">
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
