import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import ButtonItem from './components/button.styled';

const Button = ({ className, loading, text, ...rest }) => (
  <ButtonItem className={className} {...rest}>
    {loading ? (
      <ReactLoading
        type="spinningBubbles"
        width={18}
        height={18}
        color="white"
      />
    ) : (
      text
    )}
  </ButtonItem>
);

Button.defaultProps = {
  className: '',
  text: '',
};

Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element.isRequired,
  ]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
};

export default Button;
