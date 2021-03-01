import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPizzaList } from '../../store/pizza/actions';
import PizzaContent from './components/pizzaContent';

import {
  HomeContent,
  Banner,
  PizzaTitle,
  PizzaProducts,
} from './components/home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const pizzaList = useSelector((state) => state.pizzaReducer.pizzaList);

  useEffect(() => {
    dispatch(getPizzaList());
  }, [dispatch]);

  return (
    <HomeContent>
      <Banner role="banner" background="/banner.png" />
      <PizzaProducts className="pizza-products">
        <PizzaTitle>Pizzalar</PizzaTitle>
        <PizzaContent pizzaList={pizzaList} />
      </PizzaProducts>
    </HomeContent>
  );
};
export default Home;
