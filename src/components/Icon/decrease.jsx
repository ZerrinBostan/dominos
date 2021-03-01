import PropTypes from 'prop-types';

const IconDecrease = ({ width, height, fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={width}
    height={height}
    style={{
      msTransform: 'rotate(360deg)',
      WebkitTransform: 'rotate(360deg)',
    }}
    viewBox="0 0 24 24"
    transform="rotate(360)"
    {...props}
  >
    <path
      d="M20 12H4"
      stroke={fill}
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

IconDecrease.defaultProps = {
  width: 25,
  height: 25,
  fill: '#fff',
};

IconDecrease.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default IconDecrease;
