import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { closeModal } from 'redux/actions';

import styles from './ModalProvider.module.scss';

const rootModalRef = document.getElementById('root-modal');

function ModalProvider({ children }) {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const stopPropagationHandler = (event) => {
    event.stopPropagation();
  };

  const getModalProvider = (children) => {
    return (
      <div className={styles.modalBackDrop} onClick={closeModalHandler}>
        <button
          type="button"
          onClick={closeModalHandler}
          className={styles.closeButton}
        >
          x
        </button>
        <div className={styles.modal} onClick={stopPropagationHandler}>
          <div>{children}</div>
        </div>
      </div>
    );
  };

  return createPortal(getModalProvider(children), rootModalRef);
}

export default ModalProvider;
