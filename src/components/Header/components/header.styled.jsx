import styled from 'styled-components';

const HeaderLayout = styled.header`
  background-color: #000;
  display: flex;
  justify-content: center;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 1170px;

    .header_logo-item {
      width: 154px;
      height: 34px;
    }

    .header_button-basket {
      position: relative;
      outline: none;
      background: #3e4959;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      border: none;

      &--count {
        position: absolute;
        top: -4px;
        color: white;
        right: -1px;
        background: rgb(106, 106, 119);
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 11px;
        z-index: 3;
      }
    }

    .header-basket-content {
      position: relative;
    }

    @media screen and (min-width: 1024px) and (max-width: 1365px) {
      width: 959px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 726px;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
      height: auto;
      margin: 15px;

      a:first-child {
        margin-bottom: 15px;
      }

      .toggle-layout {
        left: -8rem;
        width: 17.2rem;

        div:first-child {
          height: 8rem;
        }
      }
    }
  }
`;

const ToggleLayout = styled.div`
  padding: 15px;
  background: rgb(255, 255, 255);
  position: absolute;
  right: 0;
  top: 64px;
  border-radius: 5px;
  width: 20rem;
  height: 15rem;
  box-shadow: -1px -1px 13px 0px rgba(255, 255, 255, 0.6);
  -webkit-box-shadow: -1px -1px 13px 0px rgba(255, 255, 255, 0.6);
  -moz-box-shadow: -1px -1px 13px 0px rgba(255, 255, 255, 0.6);

  p {
    padding: 4px;
    color: white;
    margin-bottom: 5px;
    background: rgb(189 52 52 / 85%);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

const PriceArea = styled.div`
  height: 10rem;
  overflow-y: scroll;
  overflow: auto;
`;

const TotalPriceArea = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #3e4959;
  font-weight: 500;
`;

export { HeaderLayout, ToggleLayout, PriceArea, TotalPriceArea };
