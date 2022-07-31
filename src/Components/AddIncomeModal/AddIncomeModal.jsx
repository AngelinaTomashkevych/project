import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';

import ModalProvider from 'Components/ModalProvider';
import AddIncomeForm from 'Components/AddIncomeModal/AddIncomeForm';

import { resolver, getDefaultValues } from './config';

function AddIncomeModal(props) {
  const { id } = props;

  const methods = useForm({
    defaultValues: getDefaultValues(props),
    resolver,
  });

  return (
    <ModalProvider>
      <FormProvider {...methods}>
        <AddIncomeForm id={id} />
      </FormProvider>
    </ModalProvider>
  );
}

AddIncomeModal.propTypes = {
  id: PropTypes.number,
};

AddIncomeModal.defaultProps = {
  id: null,
};

export default AddIncomeModal;
