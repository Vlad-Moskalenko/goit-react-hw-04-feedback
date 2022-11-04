import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <>
      <div className="btn-wrapper">
        {Object.keys(options).map(key => {
          return (
            <button
              key={key + '-btn'}
              onClick={onLeaveFeedBack}
              name={key}
              type="button"
              className="btn"
            >
              {key}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedBack: PropTypes.func.isRequired,
  options: PropTypes.shape({
    key: PropTypes.string,
  }).isRequired,
};
