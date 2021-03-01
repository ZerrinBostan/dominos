import PropTypes from 'prop-types';

const IconIncrement = ({ width, height, fill, ...props }) => (
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
      d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
      stroke={fill}
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

IconIncrement.defaultProps = {
  width: 25,
  height: 25,
  fill: '#fff',
};

IconIncrement.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default IconIncrement;
