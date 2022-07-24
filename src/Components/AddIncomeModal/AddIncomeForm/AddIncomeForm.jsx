import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { closeModal } from 'redux/actions';

import InputText from 'Components/Input/InputText';
import InputNumber from 'Components/Input/InputNumber';
import InputDate from 'Components/Input/InputDate';
import SubmitButton from 'Components/SubmitButton';

import { preparePayload } from './utils';
import { FIELD_NAMES } from '../constants';

function AddIncomeForm() {
  const { handleSubmit } = useFormContext();
  const dispatch = useDispatch();

  const submitForm = (values, event) => {
    event.preventDefault();
    const payload = preparePayload(values);
    // TODO: Add api
    console.log('payload', payload);
    dispatch(closeModal());
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputText name={FIELD_NAMES.NAME} htmlFor="Название" isRequired />
      <InputNumber name={FIELD_NAMES.QUATITY} htmlFor="Сумма" isRequired />
      <InputDate name={FIELD_NAMES.DATE} htmlFor="Дата" isRequired />
      <SubmitButton buttonTitle="Добавить" />
    </form>
  );
}

export default AddIncomeForm;
