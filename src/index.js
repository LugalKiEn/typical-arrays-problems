exports.min = function min (arr) {
  let minValue = 0;
  if (arr !== null && arr !== undefined && arr.length !== 0) { 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue) minValue = arr[i];
    }
    return minValue;
  }  else return 0;
}

exports.max = function max (arr) {
  let maxValue = 0;
  if (arr !== null && arr !== undefined && arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) maxValue = arr[i];
   }
    return maxValue;
  } else return 0;
}

exports.avg = function avg (arr) {
  let value = 0;
    if (arr !== null && arr !== undefined && arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      value += arr[i]
    }
    return value / arr.length;
  } else return 0;
}
