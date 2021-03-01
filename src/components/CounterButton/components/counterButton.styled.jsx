import styled from 'styled-components';
import Button from '../../Button';

const CounterButtonLayout = styled.div`
  height: 59px;
  width: 184px;
  display: flex;

  p {
    flex: 1 1 0%;
    padding: 0px;
    color: #1A62F3;
    margin: 0px;
    font-size: 20px;
    font-weight: 600;
    line-height: 58px;
    min-width: 60px;
    text-align: center;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: #dcdcdf;
  }
`;

const IncrementButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-color: #dcdcdf;
  width: 50px;
`;

const DecreaseButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-color: #dcdcdf;
  width: 50px;
  margin-right: 15px;
`;

export { CounterButtonLayout, IncrementButton, DecreaseButton };
