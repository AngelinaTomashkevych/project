import { FIELD_NAMES } from '../constants';

import { dateNowInMilliseconds, timeStampToDate } from 'helpers/dateTimes';

export const defaultValues = {
  [FIELD_NAMES.NAME]: '',
  [FIELD_NAMES.QUATITY]: null,
  [FIELD_NAMES.DATE]: timeStampToDate(dateNowInMilliseconds()),
};
