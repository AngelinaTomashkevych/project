import { modals } from "constants/modalNames";
import { useSelector } from "react-redux";

import { getModalName } from "redux/selectors";

function ModalManager() {
  const modalData = useSelector(getModalName);

  if (!modalData) {
    return;
  }

  const Component = modals[modalData?.name];

  return <Component {...modalData.props} />;
}

export default ModalManager;
