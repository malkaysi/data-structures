// take an array arr

function mergeSort(arr) {
  if (arr.length === 0) {
    return "Input an array";
  }

  if (arr.length === 1) {
    return arr;
  }

  let splitIndex = Math.floor(arr.length / 2);

  // Continue sorting until the array is segmented
  const leftArr = mergeSort(arr.slice(0, splitIndex));
  const rightArr = mergeSort(arr.slice(splitIndex));

  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  const newArr = [];

  let iLeft = 0;
  let jRight = 0;

  // If both arrays exist, compare the two
  while (iLeft < leftArr.length && jRight < rightArr.length) {
    // Increment across both arrays during the comparison
    if (leftArr[iLeft] < rightArr[jRight]) {
      newArr.push(leftArr[iLeft]);
      iLeft++;
    } else {
      newArr.push(rightArr[jRight]);
      jRight++;
    }
  }

  // If one array doesn't exist, just add the existing one until no values remain
  while (iLeft < leftArr.length) {
    newArr.push(leftArr[iLeft]);
    iLeft++;
  }

  while (jRight < rightArr.length) {
    newArr.push(rightArr[jRight]);
    jRight++;
  }

  return newArr;
}
