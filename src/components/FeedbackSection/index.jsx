import PropTypes from 'prop-types';
import css from './index.module.css';

export const FeedbackSection = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
