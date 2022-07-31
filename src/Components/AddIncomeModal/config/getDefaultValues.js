import { FIELD_NAMES } from '../constants';

import { dateNowInMilliseconds, timeStampToDate } from 'helpers/dateTimes';

export const getDefaultValues = (data = {}) => {
  return {
    [FIELD_NAMES.NAME]: data[FIELD_NAMES.NAME] || '',
    [FIELD_NAMES.QUATITY]: data[FIELD_NAMES.QUATITY] || null,
    [FIELD_NAMES.DATE]: timeStampToDate(
      data[FIELD_NAMES.DATE] || dateNowInMilliseconds()
    ),
  };
};
