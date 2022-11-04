import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <>
      <ul className="statistics-list">
        {Object.keys(props).map(key => {
          if (key === 'positivePercentage')
            return <li key={key}>Positive feedback: {props[key]}%</li>;
          return (
            <li key={key}>
              {key === 'positivePercentage' ? 'Positive feedback' : key}:{' '}
              {props[key]}
            </li>
          );
        })}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    key: PropTypes.string,
  }),
};
