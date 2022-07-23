import { useForm, FormProvider } from 'react-hook-form';

import ModalProvider from 'Components/ModalProvider';
import AddIncomeForm from 'Components/AddIncomeModal/AddIncomeForm';

import { resolver, defaultValues } from './config';

function AddIncomeModal(props) {
  const methods = useForm({
    defaultValues,
    resolver,
  });

  return (
    <ModalProvider>
      <FormProvider {...methods}>
        <AddIncomeForm />
      </FormProvider>
    </ModalProvider>
  );
}

export default AddIncomeModal;
