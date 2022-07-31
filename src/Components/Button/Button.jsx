import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button(props) {
  const { buttonTitle, type, className, ...restProps } = props;

  const buttonClassName = classNames(styles.button, className);

  return (
    <button type={type} className={buttonClassName} {...restProps}>
      {buttonTitle}
    </button>
  );
}

Button.propTypes = {
  buttonTitle: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  buttonTitle: '',
  type: 'button',
  className: '',
};

export default Button;
