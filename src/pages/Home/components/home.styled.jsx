import styled from 'styled-components';

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .pizza-products {
      width: 95%;
    }
  }

  @media screen and (max-width: 767px) {
    .pizza-products {
      width: 95%;
    }
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 22rem;
  background: ${(props) => `url(${props.background}) center`};
  background-size: cover;
`;

const PizzaTitle = styled.div`
  font-size: 27px;
  font-weight: 500;
  color: #3e4959;
  margin-top: 15px;
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    justify-content: center;
    display: flex;
  }
`;

const PizzaProducts = styled.div`
  .pizza-container {
    min-height: calc(100vh - 44rem);
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px 15px;
    width: 1170px;

    a {
      text-decoration: none;
    }

    .pizza-card {
      text-align: center;
      box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
      backdrop-filter: blur(4px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      &:hover {
        webkit-box-shadow: 7px 7px 5px 0px #3e4959;
        -moz-box-shadow: 7px 7px 5px 0px #3e4959;
        box-shadow: 7px 7px 5px 0px #3e4959;
        transition: all 0.5s ease 0s;
      }

      &_title {
        color: #3e4959;
        font-weight: 400;
      }

      &_price {
        color: #a38248;
        font-size: 27px;
        font-weight: 800;
        margin-bottom: 15px;
      }

      &_button {
        color: #3e4959;
        border: 2px solid #3e4959;
        transition: all 0.5s ease 0s;

        &:hover {
          background-color: #3e4959;
          color: white;
        }
      }

      .card-children {
        display: flex;
        flex-direction: column;
        height: 34%;
        justify-content: space-around;
        height: 45%;
        padding: 0 15px;
      }
    }

    @media screen and (min-width: 1024px) and (max-width: 1365px) {
      width: 980px;

      .pizza-card {
        height: 367px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: auto auto auto;
      width: 100%;

      .pizza-card {
        height: 348px;
      }
    }

    @media screen and (max-width: 767px) {
      grid-template-columns: auto auto;
      width: 100%;

      .pizza-card {
        height: 282px;

        &_title {
          font-size: 15px;
        }

        &_price {
          font-size: 19px;
        }
      }
    }
  }
`;

const LoadingContent = styled.div`
  display: flex;
  justify-content: center;
`;

export { HomeContent, Banner, PizzaTitle, PizzaProducts, LoadingContent };
