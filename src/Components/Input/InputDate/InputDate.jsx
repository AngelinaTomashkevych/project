import PropTypes from 'prop-types';
import Calendar from 'react-calendar';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Input from '../Input';

import 'react-calendar/dist/Calendar.css';
import styles from './InputDate.module.scss';

function InputDate(props) {
  const { name } = props;
  const { setValue } = useFormContext();
  // FIXME: new Date() to format
  const [value, onChange] = useState(new Date());
  const [isVisible, setVisible] = useState(false);

  const focusHandler = () => setVisible(true);

  const calendarHandler = (value) => {
    onChange(value);
    setValue(name, value);
    setVisible(false);
  };

  return (
    <div>
      <Input type="text" {...props} onFocus={focusHandler} />
      {isVisible && (
        <Calendar
          onClickDay={calendarHandler}
          value={value}
          className={styles.calendar}
        />
      )}
    </div>
  );
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputDate;
