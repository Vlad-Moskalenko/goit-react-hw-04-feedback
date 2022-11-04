import PropTypes from 'prop-types';
import './statistics.css';

export const Section = ({ title, children }) => {
  return (
    <section className="feedback">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
