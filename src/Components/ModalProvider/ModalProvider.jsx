import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import { closeModal } from "redux/actions";

import styles from "./ModalProvider.module.scss";

const rootModalRef = document.getElementById("root-modal");

function ModalProvider({ children }) {
  const dispatch = useDispatch();

  const buttonHandler = () => {
    dispatch(closeModal());
  };

  const getModalProvider = (children) => {
    return (
      <div className={styles.modalBackDrop}>
        <button
          type="button"
          onClick={buttonHandler}
          className={styles.closeButton}
        >
          x
        </button>
        <div className={styles.modal}>
          <div>{children}</div>
        </div>
      </div>
    );
  };

  return createPortal(getModalProvider(children), rootModalRef);
}

export default ModalProvider;
