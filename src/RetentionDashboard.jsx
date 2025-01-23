import React from 'react';
import PropTypes from 'prop-types';

function RetentionDashboard({ data, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>
              {item.cohort}: {item.month6}% retention ({item.totalUsers} users)
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
}

RetentionDashboard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      cohort: PropTypes.string.isRequired,
      month6: PropTypes.number.isRequired,
      totalUsers: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default RetentionDashboard;