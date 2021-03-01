import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { PizzaTitle } from '../Home/components/home.styled';
import PizzaDetailLayout from './components/pizzaDetail.styled';
import CounterButton from '../../components/CounterButton';
import { useState } from 'react';
import { setBasket } from '../../store/pizza/actions';

const PizzaDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [basketAdd, setBasketAdd] = useState('Sepete ekle');
  const [clicks, setClicks] = useState(1);

  const basket = useSelector((state) => state.pizzaReducer.basket);
  const pizzaList = useSelector((state) => state.pizzaReducer.pizzaList);
  const pizza = pizzaList?.find((item) => item.id === id);

  const handleFilterData = () => {
    const { title, price } = pizza;
    const isInBasket = basket.find((item) => item.title === title);

    if (isInBasket) {
      const totalPrice = isInBasket.price * isInBasket.count;
      const filteredBasket = basket.filter((item) => item.title !== title);
      dispatch(
        setBasket([
          ...filteredBasket,
          { title, price: totalPrice, count: clicks, totalPrice: 0 },
        ])
      );
    } else {
      dispatch(setBasket([...basket, { title, price, count: clicks, totalPrice: 0}]));
    }

    setBasketAdd('sepete eklendi!');
    history.push('/');
  };

  return (
    <PizzaDetailLayout>
      {pizza && (
        <div className="pizza-detail-info">
          <PizzaTitle className="pizza-title">Tek Kişilik Paketos</PizzaTitle>
          <Card className="pizza-card" src="/product.png">
            <div className="pizza-card_left">
              <p>{pizza.title}</p>
              <p>{`${pizza.price} TL`}</p>
            </div>
            <div className="pizza-card_right">
              <CounterButton onClick={setClicks} clicks={clicks} />
              <Button
                className="pizza-card_button"
                text={basketAdd}
                onClick={() => {
                  handleFilterData();
                }}
              />
            </div>
          </Card>
        </div>
      )}
    </PizzaDetailLayout>
  );
};
export default PizzaDetail;
