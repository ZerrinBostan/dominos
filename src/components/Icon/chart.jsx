import PropTypes from 'prop-types';

const IconChart = ({ width, height, fill, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.444 8.156l.818-4.5a.875.875 0 00-.861-1.031H2.813L2.489.844a.875.875 0 00-.86-.719H.5a.375.375 0 000 .75h1.128a.125.125 0 01.123.103l1.669 9.178a.874.874 0 00.11.292 1.625 1.625 0 102.338.427h4.764a1.624 1.624 0 101.368-.75H4.28a.125.125 0 01-.122-.103l-.209-1.147h8.634a.874.874 0 00.86-.719zM5.375 11.75a.875.875 0 11-1.75 0 .875.875 0 011.75 0zm7.5 0a.874.874 0 11-1.749 0 .874.874 0 011.749 0zM2.949 3.375h10.452a.125.125 0 01.123.147l-.818 4.5a.125.125 0 01-.123.103h-8.77l-.864-4.75z"
      fill={fill}
    />
  </svg>
);

IconChart.defaultProps = {
  width: 25,
  height: 25,
  fill: '#fff',
};

IconChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default IconChart;
