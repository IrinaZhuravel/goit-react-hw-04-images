import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = ({url, alt, closeModal}) => {
  useEffect(() => {
    const closeByEsc = ({code}) => {
      if (code === 'Escape') {
        closeModal();
      }
    }
    window.addEventListener('keydown', closeByEsc);
    
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

    return (
      <div className={styles.Overlay} onClick={e => closeModal(e)}>
        <div>
          <img src={url} alt={alt} className={styles.Modal} />
        </div>
      </div>
    );
  }


Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
