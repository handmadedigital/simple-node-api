import isnumber from 'formula-isnumber';
import error from 'formula-errors';

export default function PMT(rate, periods, present, future = 0, type = 0) {

  if (!isnumber(rate) || !isnumber(periods)) {
    return error.value;
  }

  if (rate === 0) {
    return -((present + future) / periods);
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      return -((future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate));
    } else {
      return -(future * rate / (term - 1) + present * rate / (1 - 1 / term));
    }
  }

};
