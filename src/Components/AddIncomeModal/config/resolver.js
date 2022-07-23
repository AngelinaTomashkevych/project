import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ERRORS } from 'constants/errors';

import { FIELD_NAMES } from '../constants';

const validationSchema = yup
  .object({
    [FIELD_NAMES.NAME]: yup.string().required(ERRORS.REQUIRED),
    [FIELD_NAMES.QUATITY]: yup.number().required(ERRORS.REQUIRED),
  })
  .required();

const resolver = yupResolver(validationSchema);

export { resolver };
