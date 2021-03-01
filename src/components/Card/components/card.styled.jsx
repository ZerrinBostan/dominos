import styled from 'styled-components';

const CardLayout = styled.div`
  width: 100%;
  height: 475px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  
  &:last-child {
    margin-bottom: 30px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 50%;
  }  
}
`;
export default CardLayout;
