import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./InputText.module.scss";

function InputText(props) {
  const { name, htmlFor, autoComplete, isRequired } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorName = errors[name];

  const inputStyles = classNames(styles.input, {
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
        type="text"
        name={name}
        {...register(name, { required: true })}
      />
      <div>
        {errorName && (
          <span className={styles.errorMessage}>{errorName.message}</span>
        )}
      </div>
    </div>
  );
}

InputText.propTypes = {
  autoComplete: PropTypes.oneOf(["on", "off"]),
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  isRequired: PropTypes.bool,
};

InputText.defaultProps = {
  autoComplete: "off",
  htmlFor: "",
  isRequired: false,
};

export default InputText;
