import './basket.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
const Basket = () => {
  return (
    <div className="Basket">
      <div className="Basket__header">
      <Link to="/">
          <ArrowBackIosIcon className="back"/>
        </Link>
        <h1>BASKET</h1>
      </div>
    </div>
  );
};

export default Basket;
