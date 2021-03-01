import PropTypes from 'prop-types';
import CardLayout from './components/card.styled';

const Card = ({ className, children, src, ...rest }) => (
  <CardLayout className={className} {...rest}>
    {src && <img alt="card-img" src={src} />}
    <div className="card-children">{children}</div>
  </CardLayout>
);

Card.defaultProps = {
  className: '',
  src: '',
};

Card.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Card;
