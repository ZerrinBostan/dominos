import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';

import Button from '../../../components/Button';
import Card from '../../../components/Card';

import { LoadingContent } from './home.styled';

const PizzaContent = ({ pizzaList }) => {
  const loading = useSelector((state) => state.pizzaReducer.loading);
  return (
    <div className="pizza-container">
      {Array.isArray(pizzaList) && !loading ? (
        pizzaList.map((item) => (
          <Link to={`/pizza-detail/${item.id}`} key={item.id}>
            <Card className="pizza-card" src="/product.png">
              <h3 className="pizza-card_title">{item.title} </h3>
              <div>
                <p className="pizza-card_price">{`${item.price} TL`}</p>
                <Button className="pizza-card_button" text="Sipariş Ver" />
              </div>
            </Card>
          </Link>
        ))
      ) : (
        <LoadingContent>
          <ReactLoading
            type="spinningBubbles"
            width={25}
            height={25}
            color="black"
          />
        </LoadingContent>
      )}
    </div>
  );
};

export default PizzaContent;
