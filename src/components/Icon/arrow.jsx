import PropTypes from 'prop-types';

const IconArrow = ({ width, height, fill, ...props }) => {
  return (
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
        fill={fill}
        d="M18 15a1 1 0 01-.64-.23L12 10.29l-5.37 4.32a1 1 0 01-1.41-.15 1 1 0 01.15-1.41l6-4.83a1 1 0 011.27 0l6 5a1 1 0 01.13 1.41A1 1 0 0118 15z"
      />
    </svg>
  );
};

IconArrow.defaultProps = {
  width: 25,
  height: 25,
  fill: '#fff',
};

IconArrow.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default IconArrow;
