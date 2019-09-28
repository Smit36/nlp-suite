import moment from 'moment';
import arraySort from 'array-sort';

export const getByMonth = (data) => {
  data = arraySort(data);

  let month = [];
  let count = [];
  let temp = 0;

  month.push(moment(data[0]).format('MMMM-YYYY'));
  count[0] = 1;

  for (let i = 1; i < data.length; i++) {
    if (moment(data[i]).format('MMMM-YYYY') === month[temp]) {
      count[temp]++;
    } else {
      month.push(moment(data[i]).format('MMMM-YYYY'));
      temp++;
      count[temp] = 1;
    }
  }

  return { labels: month, count };
};

export const getByDay = (data) => {
  data = arraySort(data);

  let day = [];
  let count = [];
  let temp = 0;

  day.push(moment(data[0]).format('DD-MMM-YYYY'));
  count[0] = 1;

  for (let i = 1; i < data.length; i++) {
    if (moment(data[i]).format('DD-MMM-YYYY') === day[temp]) {
      count[temp]++;
    } else {
      day.push(moment(data[i]).format('DD-MMM-YYYY'));
      temp++;
      count[temp] = 1;
    }
  }

  return { labels: day, count };
};

export const getByYear = (data) => {
  data = arraySort(data);

  let year = [];
  let count = [];
  let temp = 0;

  year.push(moment(data[0]).format('YYYY'));
  count[0] = 1;

  for (let i = 1; i < data.length; i++) {
    if (moment(data[i]).format('YYYY') === year[temp]) {
      count[temp]++;
    } else {
      year.push(moment(data[i]).format('YYYY'));
      temp++;
      count[temp] = 1;
    }
  }

  return { labels: year, count };
};
