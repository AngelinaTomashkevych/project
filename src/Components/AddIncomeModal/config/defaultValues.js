import { FIELD_NAMES } from '../constants';

export const defaultValues = {
  [FIELD_NAMES.NAME]: '',
  [FIELD_NAMES.QUATITY]: null,
  // FIXME: new Date() to format
  [FIELD_NAMES.DATE]: new Date(),
};
