import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Input.module.scss';

function Input(props) {
  const { name, type, htmlFor, autoComplete, isRequired, classname } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorName = errors[name];

  const inputStyles = classNames(styles.input, classname, {
    [styles.inputError]: errorName,
  });

  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {htmlFor}
        {isRequired && <span>*</span>}
      </label>
      <input
        className={inputStyles}
        autoComplete={autoComplete}
        type={type}
        name={name}
        {...register(name, {
          required: true,
        })}
      />
      <div>
        {errorName && (
          <span className={styles.errorMessage}>{errorName.message}</span>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  autoComplete: PropTypes.oneOf(['on', 'off']),
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  isRequired: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'date']),
  classname: PropTypes.string,
};

Input.defaultProps = {
  autoComplete: 'off',
  htmlFor: '',
  isRequired: false,
  type: 'text',
  classname: '',
};

export default Input;
