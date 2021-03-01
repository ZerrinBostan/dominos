import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconChart from '../Icon/chart';
import IconArrow from '../Icon/arrow';
import { HeaderLayout, ToggleLayout } from './components/header.styled';
import { useSelector } from 'react-redux';
import ToggleContent from './components/toggleContent';
import OutSideClick from '../OutSideClick';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const basket = useSelector((state) => state?.pizzaReducer?.basket);
  const basketCount = basket?.length || 0;

  return (
    <HeaderLayout>
      <div className="header">
        <Link to="/" className="logo">
          <img
            alt="domimo's logo"
            src="/logo.png"
            className="header_logo-item"
          />
        </Link>
        <OutSideClick onClose={() => setToggle(false)}>
          <div className="header-basket-content">
            <button
              className="header_button-basket"
              onClick={(e) => {
                e.stopPropagation();
                setToggle(!toggle);
              }}
            >
              <span className="header_button-basket--count">{basketCount}</span>
              {toggle ? (
                <IconArrow width={25} height={25} />
              ) : (
                <IconChart width={25} height={25} />
              )}
            </button>

            {toggle && (
              <ToggleLayout className="toggle-layout">
                <ToggleContent count={basketCount} data={basket} />
              </ToggleLayout>
            )}
          </div>
        </OutSideClick>
      </div>
    </HeaderLayout>
  );
};
export default Header;
