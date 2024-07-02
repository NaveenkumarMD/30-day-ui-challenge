function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}
function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = parseInt((high + low) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}
let c = [3, 4, 5, 3, 3, 2, 21, 4, 5, 4, 3];
mergeSort(c, 0, c.length - 1);
console.log(c);
