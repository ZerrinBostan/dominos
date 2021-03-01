import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IconDecrease from '../Icon/decrease';
import IconIncrement from '../Icon/increment';
import {
  CounterButtonLayout,
  IncrementButton,
  DecreaseButton,
} from './components/counterButton.styled';

const iconDecreaseComp = <IconDecrease width={14} height={14} fill="#505061" />;
const iconIncrementComp = (
  <IconIncrement width={14} height={14} fill="#505061" />
);

const CounterButton = ({ clicks, onClick }) => {
  const basket = useSelector((state) => state.pizzaReducer.basket);
  console.log('basket', basket);
  const onIncrementItem = () => {
    onClick(clicks + 1);
  };

  const onDecreaseItem = () => {
    if (clicks > 0) {
      onClick(clicks - 1);
    }
  };

  return (
    <CounterButtonLayout>
      <IncrementButton
        text={iconDecreaseComp}
        onClick={onDecreaseItem}
      ></IncrementButton>
      <p>{clicks}</p>
      <DecreaseButton
        text={iconIncrementComp}
        onClick={onIncrementItem}
      ></DecreaseButton>
    </CounterButtonLayout>
  );
};

CounterButton.CounterButton = {
  clicks: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
export default CounterButton;
