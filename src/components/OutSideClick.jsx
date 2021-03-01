import React from 'react';
import PropTypes from 'prop-types';
import OutsideClick from 'react-outsideclick';

const OutSideClick = ({ onClose, children }) => (
  <OutsideClick onClickOutside={onClose}>{children}</OutsideClick>
);

OutSideClick.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default OutSideClick;
