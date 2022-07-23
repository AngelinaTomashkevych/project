import Input from '../Input';

import styles from './InputNumber.module.scss';

function InputNumber(props) {
  return <Input type="number" {...props} classname={styles.inputNumber} />;
}

export default InputNumber;
