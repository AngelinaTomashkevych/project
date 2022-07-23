import styles from './MoneyCard.module.scss';

function MoneyCard() {
  return (
    <div className={styles.card}>
      <h3>Зарпата</h3>
      <div>
        <div>Сумма</div>
        <div>10000</div>
      </div>
      <div>
        <div>Дата</div>
        <div>20.05.2022</div>
      </div>
    </div>
  );
}

export default MoneyCard;
