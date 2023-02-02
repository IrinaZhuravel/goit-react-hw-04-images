import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ loadMode }) => {
  return (
    <button type="button" className={styles.button} onClick={loadMode}>
      Load more
    </button>
  );
};

Button.propTypes = { loadMode: PropTypes.func.isRequired };
