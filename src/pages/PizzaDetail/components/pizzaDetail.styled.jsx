import styled from 'styled-components';

const PizzaDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;

  .pizza-detail-info {
    width: 1170px;

    .card-children {
      display: flex;
      justify-content: space-between;
      padding-left: 5rem;
      padding-right: 5rem;
      margin-top: 20px;
      margin-bottom: 20px;
      align-items: center;
      height: 69px;

      & > div {
        display: flex;
      }
    }

    img {
      height: 396px;
    }

    .pizza-card {
      height: auto;

      &_left {
        justify-content: space-between;
        align-items: center;

        p:first-child {
          color: #3e4959;
          font-size: 24px;
          font-weight: 600;
        }

        p:last-child {
          color: #a38248;
          font-size: 27px;
          font-weight: 800;
          padding-left: 15px;
        }
      }

      &-right {
        justify-content: space-between;
        text-align: center;

        div:first-child {
          height: 59px;
        }
      }

      &_button {
        width: 184px;
        background-color: #0cb14b;
        padding: 20px 0;
        border-color: #0cb14b;
        color: white;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
    @media screen and (min-width: 1024px) and (max-width: 1365px) {
      width: 959px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 94%;

      .card-children {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    @media screen and (max-width: 767px) {
      width: 96%;

      .pizza-title {
        display: flex;
        justify-content: start;
      }

      .pizza-card {
        padding-bottom: 46px;
        
        &_left {
          display: block;
          width: 100%;
          line-height: 23px;
          margin-bottom: 23px;

          p:first-child {
            display: none;
          }
        }
        
        &_right {
          width: 96%;
        }
      }

      .card-children {
        padding: 0;
        display: flex;
        flex-direction: column;
      }
    }

  }
`;

export default PizzaDetailLayout;
