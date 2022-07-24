import PropTypes from 'prop-types';

import styles from './SubmitButton.module.scss';

function SubmitButton(props) {
  const { buttonTitle } = props;

  return (
    <button type="submit" className={styles.button}>
      {buttonTitle}
    </button>
  );
}

SubmitButton.propTypes = {
  buttonTitle: PropTypes.string,
};

SubmitButton.defaultProps = {
  buttonTitle: 'SUBMIT',
};

export default SubmitButton;
