import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MoneyCard from 'Components/MoneyCard';
import Button from 'Components/Button';

import { addIncomeModalName } from 'constants/modalNames';
import { BUTTON } from 'constants/texts';

import { openModal } from 'redux/actions';
import { getIncomes } from 'redux/selectors';
import { fetchIncomes } from 'redux/operations';

import styles from './Income.module.scss';

function Income() {
  const dispatch = useDispatch();

  const data = useSelector(getIncomes);

  const buttonHandler = () => {
    dispatch(openModal({ name: addIncomeModalName }));
  };

  useEffect(() => {
    dispatch(fetchIncomes());
  }, []);

  return (
    <div>
      <h2>Доходы</h2>
      <Button
        buttonTitle={BUTTON.CREATE_INCOME}
        onClick={buttonHandler}
        className={styles.button}
      />
      <div className={styles.cardWrapper}>
        {data?.map((income) => {
          return <MoneyCard key={income.id} {...income} />;
        })}
      </div>
    </div>
  );
}

export default memo(Income);
