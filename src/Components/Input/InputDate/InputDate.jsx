import PropTypes from 'prop-types';
import Calendar from 'react-calendar';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  toTimeStampInMilliseconds,
  dateNowInMilliseconds,
  timeStampToDate,
} from 'helpers/dateTimes';

import Input from '../Input';

import 'react-calendar/dist/Calendar.css';
import styles from './InputDate.module.scss';

function InputDate(props) {
  const { name } = props;
  const { setValue } = useFormContext();

  const [value, onChange] = useState(dateNowInMilliseconds());
  const [isVisible, setVisible] = useState(false);

  const focusHandler = () => setVisible(true);

  const calendarHandler = (date) => {
    const timeStamp = toTimeStampInMilliseconds(date);
    onChange(timeStamp);
    setValue(name, timeStampToDate(timeStamp));
    setVisible(false);
  };

  return (
    <div>
      <Input type="text" {...props} onFocus={focusHandler} />
      {isVisible && (
        <Calendar
          onClickDay={calendarHandler}
          value={new Date(value)}
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
