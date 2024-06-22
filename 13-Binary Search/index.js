function search(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
// left most
function searchLeftMost(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let res;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      res = mid;
      end = mid - 1;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
}

// right most
function searchRightMost(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      res = mid;
      start = mid + 1;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
}

function recSearch(arr, num, start, end) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      return recSearch(arr, num, mid + 1, end);
    } else {
      return recSearch(arr, num, start, mid - 1);
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 8];
let index = search(arr, 4);
console.log(searchLeftMost(arr, 4));
console.log(searchRightMost(arr, 4));
console.log(index);
console.log(recSearch(arr, 4, 0, arr.length - 1));
