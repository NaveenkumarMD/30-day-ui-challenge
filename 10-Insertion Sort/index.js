// insertion sort

function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      const temp = arr[j];
      const elem = arr[j - 1];
      if (elem < temp) {
        arr[i] = temp;
        arr[j] = elem;
      }
      if (elem > temp) {
        break;
      }
    }
  }
}

let x = [6, 5, 4, 3, 1, 2, 3, 4];
sort(x);
console.log(x);
