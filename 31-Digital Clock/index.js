const lights = {
  0: [1, 2, 3, 5, 6, 7],
  1: [3, 6],
  2: [1, 3, 4, 5, 7],
  3: [1, 3, 4, 5, 6],
  4: [2, 4, 3, 6],
  5: [1, 2, 4, 6, 7],
  6: [1, 2, 4, 5, 6, 7],
  7: [1, 3, 6],
  8: [1, 2, 3, 4, 5, 6, 7],
  9: [1, 2, 3, 4, 5],
};

//    1
// 2     3
//    4
// 5     6
//    7

const digitNode = document.querySelector(".digit");

const hoursDigit1 = digitNode.cloneNode(true);
hoursDigit1.style.display = "block";
hoursDigit1.id = "hoursDigit1";
const hoursDigit2 = digitNode.cloneNode(true);
hoursDigit2.style.display = "block";
hoursDigit2.id = "hoursDigit2";

const minutesDigit1 = digitNode.cloneNode(true);
minutesDigit1.style.display = "block";
minutesDigit1.id = "minutesDigit1";
const minutesDigit2 = digitNode.cloneNode(true);
minutesDigit2.style.display = "block";
minutesDigit2.id = "minutesDigit2";

document.body.appendChild(hoursDigit1);
document.body.appendChild(hoursDigit2);
document.body.appendChild(minutesDigit1);
document.body.appendChild(minutesDigit2);

function showSegmentLight(digitElem, number) {
  const id = digitElem.id;
  lights[number].forEach((light) => {
    const segment = document.querySelector(`#${id} #segment-${light}`);
    segment.style.backgroundColor = "red";
  });
}

function getDigits(number) {
  if (number < 9) {
    return [0, number];
  } else {
    return [parseInt(number / 10), parseInt(number % 10)];
  }
}

function showTime() {
  const currDate = new Date();

  let minutes = getDigits(currDate.getMinutes());
  let hours = getDigits(currDate.getHours());

  showSegmentLight(hoursDigit1, hours[0]);
  showSegmentLight(hoursDigit2, hours[1]);
  showSegmentLight(minutesDigit1, minutes[0]);
  showSegmentLight(minutesDigit2, minutes[1]);
}

setInterval(showTime, 1000);
