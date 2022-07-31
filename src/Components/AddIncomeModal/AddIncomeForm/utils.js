import { toTimeStampInMilliseconds } from 'helpers/dateTimes';

import { FIELD_NAMES } from '../constants';

export const preparePayload = (values, id) => {
  const { [FIELD_NAMES.DATE]: date, ...rest } = values;

  return {
    [FIELD_NAMES.DATE]: toTimeStampInMilliseconds(date),
    ...rest,
    ...(id && { id }),
  };
};
