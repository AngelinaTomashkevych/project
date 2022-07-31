import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { closeModal } from 'redux/actions';

import InputText from 'Components/Input/InputText';
import InputNumber from 'Components/Input/InputNumber';
import InputDate from 'Components/Input/InputDate';
import Button from 'Components/Button';

import { setIncome, updateIncome } from 'redux/operations';

import { BUTTON, FIELD_LABELS } from 'constants/texts';

import { preparePayload } from './utils';
import { FIELD_NAMES } from '../constants';

function AddIncomeForm(props) {
  const { id } = props;

  const { handleSubmit } = useFormContext();
  const dispatch = useDispatch();

  const submitForm = (values, event) => {
    event.preventDefault();

    const payload = preparePayload(values, id);

    if (id) {
      dispatch(updateIncome(payload));
    } else {
      dispatch(setIncome(payload));
    }

    dispatch(closeModal());
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputText
        name={FIELD_NAMES.NAME}
        htmlFor={FIELD_LABELS.NAME}
        isRequired
      />
      <InputNumber
        name={FIELD_NAMES.QUATITY}
        htmlFor={FIELD_LABELS.SUMM}
        isRequired
      />
      <InputDate
        name={FIELD_NAMES.DATE}
        htmlFor={FIELD_LABELS.DATE}
        isRequired
      />
      <Button type="submit" buttonTitle={BUTTON.ADD} />
    </form>
  );
}

AddIncomeForm.propTypes = {
  id: PropTypes.number,
};

AddIncomeForm.defaultProps = {
  id: null,
};

export default AddIncomeForm;
