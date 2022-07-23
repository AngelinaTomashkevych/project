import MoneyCard from 'Components/MoneyCard';
import { useDispatch } from 'react-redux';

import { addIncomeModalName } from 'constants/modalNames';

import { openModal } from 'redux/actions';

function Income() {
  const dispatch = useDispatch();

  const buttonHandler = () => {
    dispatch(openModal({ name: addIncomeModalName }));
  };

  return (
    <div>
      <h2>Доходы</h2>
      <button type="button" onClick={buttonHandler}>
        add
      </button>
      <div>
        <MoneyCard />
      </div>
    </div>
  );
}

export default Income;
