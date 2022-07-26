import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";

import { closeModal } from "redux/actions";

import InputText from "Components/InputText";

import { FIELD_NAMES } from "../constants";

function AddIncomeForm() {
  const { handleSubmit } = useFormContext();

  const dispatch = useDispatch();

  const submitForm = (values, event) => {
    event.preventDefault();

    dispatch(closeModal());
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <InputText name={FIELD_NAMES.NAME} htmlFor="Название" isRequired/>
      <button type="submit">submit</button>
    </form>
  );
}

export default AddIncomeForm;
