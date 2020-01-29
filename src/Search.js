function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i + 1;
    }
  }
  return arr.length;
}

function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  //base case
  if (start > end) {
    console.log(`${value} not included in list`);
    return -1;
  }
  //find the midpoint and item at that index
  let index = Math.floor((start + end) / 2);
  let item = array[index];
  //case where the midpoint is the value being targeted
  if (item == value) {
    console.log(index);
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

module.exports = {
  linearSearch,
  binarySearch
};
