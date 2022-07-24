import { getUnixTime, format } from 'date-fns';

export const toTimeStampInMilliseconds = (date) => {
  return getUnixTime(date) * 1000;
};

export const dateNowInMilliseconds = () => {
  return toTimeStampInMilliseconds(new Date());
};

export const timeStampToDate = (date) => {
  return format(date, 'dd MMMM yyyy');
};
