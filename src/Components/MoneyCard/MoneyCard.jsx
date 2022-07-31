import PropTypes from 'prop-types';
import { memo } from 'react';
import { useDispatch } from 'react-redux';

import { addIncomeModalName } from 'constants/modalNames';

import { timeStampToDate } from 'helpers/dateTimes';

import { openModal } from 'redux/actions';
import { deleleteIncome } from 'redux/operations';

import styles from './MoneyCard.module.scss';

function MoneyCard(props) {
  const { quantity, date, name, id } = props;

  const dispatch = useDispatch();

  const cardHandler = () => {
    dispatch(
      openModal({
        name: addIncomeModalName,
        props: { name, quantity, date, id },
      })
    );
  };

  const deleteHandler = (event) => {
    event.stopPropagation();

    dispatch(deleleteIncome({ id }));
  };

  return (
    <div className={styles.card} onClick={cardHandler}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.summ}>
        <div>Сумма</div>
        <div>{quantity}</div>
      </div>
      <div>
        <div>Дата</div>
        <div>{timeStampToDate(date)}</div>
      </div>
      <button type="button" onClick={deleteHandler}>
        del
      </button>
    </div>
  );
}

MoneyCard.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default memo(MoneyCard);
