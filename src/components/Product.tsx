import "./product.css";
import Button from "@material-ui/core/Button";
type Props = {
  src: string;
  title: string;
  price: string;
};
const Product = ({ src, title, price }: Props) => {
  return (
    <div className="product">
      <img src={src} className="product__image" alt={title} />
      <p className="product__title">{title}</p>
      <p className="product__price">${price}</p>
      <Button variant="contained" className="product__button" color="default">
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
