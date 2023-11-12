import PropTypes from 'prop-types';
import css from './index.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.statWrapper}>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>{' '}
        </p>
        <p>
          Total: <span>{total}</span>{' '}
        </p>
      </div>
      <div className={css.posiWrapper}>
        <p>
          Positive feedback: <span>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
